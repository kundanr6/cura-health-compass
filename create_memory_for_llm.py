from langchain_community.document_loaders import PyMuPDFLoader, DirectoryLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
import os


# step 1: load the raw pdf(s)
print("Script started...")
DATA_PATH= "data/"
def load_pdf_files(data):
    loader = DirectoryLoader(data, glob="*.pdf", loader_cls=PyMuPDFLoader)
    documents = loader.load()
    return documents

documents = load_pdf_files(data=DATA_PATH)
print("length of pdf pages: ", len(documents))



# step 2 : create chunks

def create_chunks(extracted_data):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    text_chunks = text_splitter.split_documents(extracted_data)
    return text_chunks

text_chunks = create_chunks(extracted_data=documents)
print("length of chunks: ", len(text_chunks))


# step 3: create vector embeddings

def get_embedding_model():
    embedding_model = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    return embedding_model


embedding_model = get_embedding_model()


# step 4: store embeddings in faiss

DB_FAISS_PATH = "vectorstore/db_faiss"
db=FAISS.from_documents(text_chunks, embedding_model)
db.save_local(DB_FAISS_PATH)
#print("Embeddings created and stored in faiss")

