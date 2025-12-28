#!/bin/bash

# Configuration
PORT=3006

echo "🔍 Checking port $PORT..."

# Find PID using the port (works on macOS and Linux)
PID=$(lsof -t -i:$PORT)

if [ -z "$PID" ]; then
    echo "✅ Port $PORT is free."
else
    echo "⚠️ Port $PORT is occupied by PID $PID. Killing process..."
    # Kill the process
    kill -9 $PID
    
    # Wait a bit to ensure the port is released
    sleep 2
    
    # Verify if it's really gone
    STILL_ALIVE=$(lsof -t -i:$PORT)
    if [ -z "$STILL_ALIVE" ]; then
        echo "✅ Process $PID killed and port $PORT is now free."
    else
        echo "❌ Failed to kill process on port $PORT. Please check manually."
        exit 1
    fi
fi

echo "🚀 Starting the project on port $PORT..."
# Start the project using npm run dev and passing the port argument
npm run dev -- --port $PORT
