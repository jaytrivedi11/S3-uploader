# S3 File Upload App

This is a simple web application for uploading files to an AWS S3 bucket. The application consists of a Node.js backend using Express for handling file uploads and an HTML/CSS/JavaScript frontend for the user interface.

## Features

- File upload to AWS S3
- Simple and responsive user interface
- Backend handling of file uploads to S3

## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - Multer (for handling file uploads)
  - AWS SDK for JavaScript (v3)

- **Frontend:**
  - HTML
  - CSS
  - JavaScript (Vanilla)

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/s3-file-upload-app.git
   cd s3-file-upload-app
   ```
2. Install dependencies:

   ```bash
   npm install

   ```
3. Start the backend server:

   ```bash
   npm start
   ```
   The server will run at http://localhost:3000.
4. Upload files on aws (optional):

Use the provided form to select and upload files. The progress bar will show the upload progress, and the status will display the result of the upload.

## AWS Configuration
Before running the application, make sure to configure your AWS credentials and set up an S3 bucket. Update the AWS SDK configuration in server.js with your credentials and bucket information.

## Deployment
The application can be deployed on AWS using services like Elastic Beanstalk for the backend and S3 or AWS Amplify for the frontend.

