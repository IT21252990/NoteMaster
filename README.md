# NoteMaster Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
    - [Database Setup](#database-setup)
3. [API Endpoints](#api-endpoints)
4. [Usage](#usage)
5. [Contributing](#contributing)
6. [Environment Variables](#environment-variables)
7. [License](#license)

## Introduction
NoteMaster is a simple note-taking application built using Node.js, Express, React, and MongoDB. It utilizes JWT tokens for authentication.

## Setup Instructions
### Prerequisites
- Node.js and npm should be installed on your system.
- MongoDB should be installed and running on your system.

### Frontend Setup
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend:
    ```bash
    npm start
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory:
    ```bash
    touch .env
    ```

4. Populate the `.env` file with the following content:
    ```plaintext
    PORT=3000
    MONGODB_CONNECTION_STRING= <YOUR_MONGODB_CONNECTION_STRING_HERE>
    SECRET= <YOUR_SECRET_KEY_HERE>
    ```
       Replace <YOUR_MONGODB_CONNECTION_STRING_HERE> with your actual database connection string and <YOUR_SECRET_KEY_HERE> with the secret key for JWT authorization.
5. Start the backend:
    ```bash
    npm run dev
    ```

### Database Setup
1. Install MongoDB on your system if not already installed. You can download it from [MongoDB website](https://www.mongodb.com/try/download/community).

2. Start MongoDB service.

3. Use the `MONGODB_CONNECTION_STRING` provided in the `.env` file for connecting the application to the MongoDB database.

## API Endpoints
### 1. Get All Notes
- **Method:** GET
- **Endpoint:** `/api/notes`
- **Description:** Retrieves all notes stored in the database.
- **Response:** JSON array of note objects.

### 2. Create a Note
- **Method:** POST
- **Endpoint:** `/api/notes`
- **Description:** Creates a new note.
- **Request Body:** JSON object with `title` and `content` fields.
- **Response:** JSON object of the created note.

### 3. Get a Note by ID
- **Method:** GET
- **Endpoint:** `/api/notes/:id`
- **Description:** Retrieves a note by its ID.
- **Response:** JSON object of the requested note.

### 4. Update a Note
- **Method:** PUT
- **Endpoint:** `/api/notes/:id`
- **Description:** Updates an existing note by its ID.
- **Request Body:** JSON object with updated `title` and/or `content` fields.
- **Response:** JSON object of the updated note.

### 5. Delete a Note
- **Method:** DELETE
- **Endpoint:** `/api/notes/:id`
- **Description:** Deletes a note by its ID.
- **Response:** Success message.

## Usage
1. Start the frontend:
    ```bash
    cd frontend
    npm start
    ```

2. Start the backend:
    ```bash
    cd backend
    npm start
    ```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

4. Use the provided API endpoints to interact with the notes.

## Contributing
Contributions are welcome! Feel free to submit issues or pull requests.
