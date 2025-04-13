
#!/bin/bash

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting Cura Health AI Application...${NC}"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}Python 3 is not installed. Please install Python 3.10 or higher.${NC}"
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed. Please install Node.js 16 or higher.${NC}"
    exit 1
fi

# Start the Python server in the background
echo -e "${GREEN}Starting Python chatbot server...${NC}"
python3 api.py &
PYTHON_PID=$!

# Wait a moment for the Python server to start
sleep 2

# Start the React app
echo -e "${GREEN}Starting React application...${NC}"
npm run dev

# When the React app is closed, also close the Python server
echo -e "${BLUE}Shutting down Python chatbot server...${NC}"
kill $PYTHON_PID

echo -e "${GREEN}Application shutdown complete.${NC}"
