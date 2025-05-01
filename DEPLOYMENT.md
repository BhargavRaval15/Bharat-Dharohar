# Deployment Guide

This guide explains how to deploy the project to Netlify (frontend) and Render (backend).

## Frontend Deployment (Netlify)

1. **Create a Netlify account**
   - Sign up at [netlify.com](https://netlify.com)

2. **Connect your GitHub repository**
   - From the Netlify dashboard, click "Add new site" > "Import an existing project"
   - Connect to GitHub and select your repository

3. **Configure the build settings**
   - The netlify.toml file is already configured with the following settings:
     - Base directory: `frontend`
     - Build command: `npm install && npm run build`
     - Publish directory: `frontend/dist`

4. **Environment Variables**
   - Add the following environment variable in the Netlify dashboard:
     - VITE_API_URL: `https://your-render-app-name.onrender.com/api`

5. **Deploy**
   - Click "Deploy site"

## Backend Deployment (Render)

1. **Create a Render account**
   - Sign up at [render.com](https://render.com)

2. **Create a new Web Service**
   - From the Render dashboard, click "New" > "Web Service"
   - Connect to GitHub and select your repository

3. **Configure the web service**
   - Name: Choose a name for your service (e.g., cultural-canvas-api)
   - Root Directory: `backend`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Environment Variables**
   - Add the following environment variables:
     - NODE_ENV: `production`
     - PORT: `10000` (or your preferred port)
     - MONGODB_URI: Your MongoDB connection string
     - JWT_SECRET: Your secret key for JWT

5. **Deploy**
   - Click "Create Web Service"

## Connecting Frontend to Backend

After deploying both the frontend and backend, make sure to update the frontend's environment variable to point to your Render backend URL:

In Netlify:
1. Go to Site Settings > Environment variables
2. Add/Update the variable VITE_API_URL to point to your Render backend URL (e.g., https://cultural-canvas-api.onrender.com/api)

## Testing the Deployment

1. Visit your Netlify URL to access the frontend application
2. The application should be able to communicate with the backend on Render

## Troubleshooting

- **CORS Issues**: If you encounter CORS errors, check the CORS configuration in backend/server.js and make sure your Netlify domain is included in the allowed origins.
- **Environment Variables**: Double-check all environment variables are correctly set.
- **Build Failures**: Check the build logs on both Netlify and Render for any errors. 