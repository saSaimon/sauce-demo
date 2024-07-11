# Use an official Node.js runtime as a parent image
FROM cypress/base:14.16.0

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Add Cypress binary to PATH
ENV PATH /root/.cache/Cypress/13.13.0/Cypress:/app/node_modules/.bin:$PATH

# Run Cypress tests
CMD ["npm", "run", "test"]
