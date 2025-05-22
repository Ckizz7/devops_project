# Uses my official Node.js image
FROM node:16

# Sets my working directory
WORKDIR /app

# Copies package.json and package-lock.json
COPY package*.json ./

# Install dependencies, including devDependencies
ENV NODE_ENV=development
RUN npm install && npm list jest

# This copies the rest of the application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Starts the app
CMD ["node", "app.js"]