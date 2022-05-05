FROM node:12-slim
FROM mcr.microsoft.com/playwright:v1.20.2-focal

# Create an app directory in the docker
WORKDIR /app

# Copy the package.json and package-lock.json. 
COPY package*.json ./

# Install production dependencies.
RUN npm install --only=production

# Copy local code to the container image.
COPY . ./

# Run the server
CMD node index.js