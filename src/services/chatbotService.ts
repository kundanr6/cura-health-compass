
/**
 * Service for interacting with the local Python-based chatbot
 */

// Function to send a message to the chatbot and get a response
export const sendMessageToChatbot = async (message: string): Promise<string> => {
  try {
    console.log("Sending message to chatbot:", message);
    
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Chatbot API error:", errorData);
      throw new Error(errorData.error || 'Failed to get response from chatbot');
    }

    const data = await response.json();
    console.log("Chatbot response:", data);
    return data.response;
  } catch (error) {
    console.error('Error communicating with chatbot:', error);
    
    // Fallback response if the API is unavailable
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};

// Function to check if the chatbot API is available
export const isChatbotAvailable = async (): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'ping' }),
    });
    
    return response.ok;
  } catch (error) {
    console.error('Chatbot API unavailable:', error);
    return false;
  }
};
