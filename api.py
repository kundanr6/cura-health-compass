
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from connect_memory_with_llm import get_medical_response
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        logger.info(f"Received message: {user_message}")
        
        # Get response from the chatbot
        response = get_medical_response(user_message)
        
        logger.info(f"Generated response: {response[:100]}...")
        
        return jsonify({
            'response': response
        })
    
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}", exc_info=True)
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    # Make sure FAISS database is created before starting the server
    if not os.path.exists('vectorstore/db_faiss'):
        logger.info("FAISS database not found. Creating database...")
        try:
            import create_memory_for_llm
            logger.info("Database created successfully.")
        except Exception as e:
            logger.error(f"Failed to create database: {str(e)}", exc_info=True)
            
    # Start the Flask server
    logger.info("Starting Flask server...")
    app.run(host='0.0.0.0', port=5000, debug=True)
