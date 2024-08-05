# React Frontend with Docker CI/CD Pipeline

## Overview

This repository contains the frontend React application and the Docker configuration used for building, publishing, and deploying the Docker image to AWS EC2. It also includes a GitHub Actions workflow for CI/CD to automate these processes.

## React Frontend

### Application Description

The React application allows users to:

- Add data with a `name` and `description`.
- Display a list of data fetched from an API.

### Code

Here's the main React component:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api-mina.learn.cloudlaya.com');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://api-mina.learn.cloudlaya.com', { name, description });
      alert('Data added successfully!');
      setName('');
      setDescription('');
      fetchData(); // Fetch data again to update the list
    } catch (error) {
      console.error('Error adding data:', error.response ? error.response.data : error.message);
      alert('Error adding data: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  return (
    <div className="App">
      <h1>Add Data to MySQL via React and Node.js</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Data</button>
      </form>
      
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>Name: </strong> {item.name} <br />
            <strong>Description:</strong> {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


### Docker Configuration
### Dockerfile

The Dockerfile builds the React application and serves it using Nginx:

Dockerfile

# Stage 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

### CI/CD Pipeline

The CI/CD pipeline is managed using GitHub Actions. It includes stages for building, publishing, and deploying Docker images to AWS EC2.
Workflow Configuration

The GitHub Actions workflow is defined in .github/workflows/deploy.yml:

yaml

name: Build, publish, and deploy Docker image to EC2

on:
  push:
    branches:
      - dev
      - qa
      - stage
      - production

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-southeast-1

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v1

      - name: Build Docker image
        run: |
          docker build -t kalu-frontend .

      - name: Tag Docker image
        run: |
          docker tag kalu-frontend:latest 654654282708.dkr.ecr.ap-southeast-1.amazonaws.com/kalu-frontend:${{ github.ref_name }}-latest

      - name: Push Docker image to Amazon ECR
        run: |
          docker push 654654282708.dkr.ecr.ap-southeast-1.amazonaws.com/kalu-frontend:${{ github.ref_name }}-latest

  deploy:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: SSH into EC2 and deploy
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          port: ${{ secrets.EC2_PORT }}
          script: |
            if [ "${{ github.ref_name }}" == "production" ]; then
              sh deploy-fproduction.sh
            elif [ "${{ github.ref_name }}" == "stage" ]; then
              sh deploy-fstage.sh
            elif [ "${{ github.ref_name }}" == "qa" ]; then
              sh deploy-fqa.sh
            elif [ "${{ github.ref_name }}" == "dev" ]; then
              sh deploy-fdev.sh
            fi

### Deployment Scripts

The deployment scripts (deploy-fproduction.sh, deploy-fstage.sh, deploy-fqa.sh, deploy-fdev.sh) handle the deployment process for each environment. Ensure these scripts are present on the EC2 instance and have the necessary commands to update and restart the application.
Additional Information

    API Endpoint: The application communicates with the backend API at https://api-mina.learn.cloudlaya.com.
    Secrets Management: AWS credentials and SSH keys are managed through GitHub Secrets for security.