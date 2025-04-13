
# Cura Health AI Chat Bot

A health-focused AI chatbot utilizing large language models with a medical knowledge base.

## Features

- Medical symptom analysis and guidance
- Firebase authentication (email/password and Google Sign-In)
- Chat history for registered users
- Emergency detection for critical health conditions
- AI-powered medical knowledge base from medical reference PDFs

## Setup Instructions

### Frontend (React App)

1. Install dependencies:
   ```
   npm install
   ```

2. Start the React application:
   ```
   npm run dev
   ```

### Backend (Python Chatbot)

1. Install Python 3.10+ and pip

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```
   
   Or with pipenv:
   ```
   pipenv install
   ```

3. Create the vector database (only needed once):
   ```
   python create_memory_for_llm.py
   ```

4. Start the chatbot API server:
   ```
   python api.py
   ```

## Usage

1. Access the web application at http://localhost:5173
2. Sign in using email/password or Google Sign-In, or continue as a guest
3. Start a conversation by describing your symptoms or health concerns
4. The AI will analyze your input and provide relevant health information

## Note

- This application is for informational purposes only and should not replace professional medical advice.
- The chatbot backend must be running for full AI capabilities.
- When the chatbot server is unavailable, the application will fall back to basic keyword matching.

## Dependencies

- React with TypeScript
- Firebase (Authentication, Firestore)
- Tailwind CSS
- Python Flask
- LangChain
- HuggingFace Embeddings
- FAISS Vector Database
- Groq API
