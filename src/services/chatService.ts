
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

// Save a new chat message
export const saveMessage = async (userId: string, sessionId: string, message: Message) => {
  try {
    console.log(`Saving message for user ${userId} in session ${sessionId}`);
    const messageData = {
      ...message,
      timestamp: Timestamp.fromDate(message.timestamp),
      userId,
      sessionId
    };
    
    await addDoc(collection(db, 'messages'), messageData);
    console.log('Message saved successfully');
    return true;
  } catch (error) {
    console.error('Error saving message:', error);
    return false;
  }
};

// Create a new chat session
export const createChatSession = async (userId: string, title: string) => {
  try {
    console.log(`Creating chat session for user ${userId} with title ${title}`);
    const sessionData = {
      userId,
      title,
      createdAt: Timestamp.now(),
      lastUpdatedAt: Timestamp.now(),
    };
    
    const docRef = await addDoc(collection(db, 'chatSessions'), sessionData);
    console.log('Chat session created with ID:', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error creating chat session:', error);
    return null;
  }
};

// Get all chat sessions for a user
export const getChatSessions = async (userId: string): Promise<ChatSession[]> => {
  try {
    console.log(`Getting chat sessions for user ${userId}`);
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
    
    console.log(`Found ${sessions.length} sessions`);
    return sessions;
  } catch (error) {
    console.error('Error getting chat sessions:', error);
    return [];
  }
};

// Get all messages for a specific chat session
export const getSessionMessages = async (sessionId: string): Promise<Message[]> => {
  try {
    console.log(`Getting messages for session ${sessionId}`);
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
    
    console.log(`Found ${messages.length} messages`);
    return messages;
  } catch (error) {
    console.error('Error getting session messages:', error);
    return [];
  }
};

// Update a chat session's title
export const updateSessionTitle = async (sessionId: string, title: string) => {
  try {
    console.log(`Updating title for session ${sessionId}`);
    const sessionRef = doc(db, 'chatSessions', sessionId);
    await updateDoc(sessionRef, {
      title,
      lastUpdatedAt: Timestamp.now()
    });
    console.log('Session title updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating session title:', error);
    return false;
  }
};
