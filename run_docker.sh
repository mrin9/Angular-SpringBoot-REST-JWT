#!/bin/bash

# Name of the Docker image
IMAGE_NAME="angular-springboot-image"

# Build the Docker image
echo "Building Docker image..."
docker build -t $IMAGE_NAME .

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Docker image built successfully."

    # Run the Docker container
    echo "Running Docker container..."
    docker run -p 8080:9119 -d $IMAGE_NAME

    # Check if the container started successfully
    if [ $? -eq 0 ]; then
        echo "Docker container is running."
        echo "Access the application at http://localhost:8080"
    else
        echo "Failed to start Docker container."
    fi
else
    echo "Failed to build Docker image."
fi
