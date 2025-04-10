
import { db } from '@/lib/firebase';
import { 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs, 
  orderBy, 
  Timestamp,
  doc,
  updateDoc 
} from 'firebase/firestore';
import { Message, ChatSession } from '@/types/chat';
import { User } from 'firebase/auth';

// Save a new chat message
export const saveMessage = async (userId: string, sessionId: string, message: Message) => {
  try {
    const messageData = {
      ...message,
      timestamp: Timestamp.fromDate(message.timestamp),
      userId,
      sessionId
    };
    
    await addDoc(collection(db, 'messages'), messageData);
    return true;
  } catch (error) {
    console.error('Error saving message:', error);
    return false;
  }
};

// Create a new chat session
export const createChatSession = async (userId: string, title: string) => {
  try {
    const sessionData = {
      userId,
      title,
      createdAt: Timestamp.now(),
      lastUpdatedAt: Timestamp.now(),
    };
    
    const docRef = await addDoc(collection(db, 'chatSessions'), sessionData);
    return docRef.id;
  } catch (error) {
    console.error('Error creating chat session:', error);
    return null;
  }
};

// Get all chat sessions for a user
export const getChatSessions = async (userId: string): Promise<ChatSession[]> => {
  try {
    const q = query(
      collection(db, 'chatSessions'),
      where('userId', '==', userId),
      orderBy('lastUpdatedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(q);
    const sessions: ChatSession[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      sessions.push({
        id: doc.id,
        title: data.title,
        messages: [],
        createdAt: data.createdAt.toDate(),
        lastUpdatedAt: data.lastUpdatedAt.toDate()
      });
    });
    
    return sessions;
  } catch (error) {
    console.error('Error getting chat sessions:', error);
    return [];
  }
};

// Get all messages for a specific chat session
export const getSessionMessages = async (sessionId: string): Promise<Message[]> => {
  try {
    const q = query(
      collection(db, 'messages'),
      where('sessionId', '==', sessionId),
      orderBy('timestamp', 'asc')
    );
    
    const querySnapshot = await getDocs(q);
    const messages: Message[] = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      messages.push({
        id: data.id,
        role: data.role,
        content: data.content,
        timestamp: data.timestamp.toDate()
      });
    });
    
    return messages;
  } catch (error) {
    console.error('Error getting session messages:', error);
    return [];
  }
};

// Update a chat session's title
export const updateSessionTitle = async (sessionId: string, title: string) => {
  try {
    const sessionRef = doc(db, 'chatSessions', sessionId);
    await updateDoc(sessionRef, {
      title,
      lastUpdatedAt: Timestamp.now()
    });
    return true;
  } catch (error) {
    console.error('Error updating session title:', error);
    return false;
  }
};
