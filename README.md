# React Auth App

This project is a simple authentication application using React and Node.js. Users can register, log in, and view user information.

## Screenshots

### Login Page
<img src="https://github.com/beyzatuna/authenticationApp-with-mern-stack/assets/54098270/16733c6b-f9cc-4386-84bb-d27b7f41e102" alt="login" width="400" />

### Register Page
<img src="https://github.com/beyzatuna/authenticationApp-with-mern-stack/assets/54098270/dc0cc8f1-0d28-4f0e-8de4-2a35209e9550" alt="register" width="400" />

### User Dashboard
<img src="https://github.com/beyzatuna/authenticationApp-with-mern-stack/assets/54098270/80007d4c-6516-4234-a680-c302352e4cae" alt="dashboard" width="400" />


## Requirements

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/beyzatuna/authenticationApp-with-mern-stack.git 
    cd react-auth-app
    ```

2. Install dependencies:
    ```sh
    npm install
    cd client
    npm install
    cd ..
    ```

3. Create a `.env` file and add the necessary environment variables:
    ```sh
    touch .env
    ```

    Example `.env` file content:
    ```
    MONGO_URI=mongodb://username:password@host:port/dbname
    SECRET_KEY=your_secret_key
    ```

4. Update the database connection (in `db.js` or `server.js`):
    ```javascript
    // db.js or server.js
    require('dotenv').config();
    const mongoose = require('mongoose');

    const connectDB = async () => {
        try {
            await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log('Database connected');
        } catch (error) {
            console.error('Database connection error:', error.message);
            process.exit(1);
        }
    };
    module.exports = connectDB;
    ```

## Running the Application

1. Start the server:
    ```sh
    npm run server
    ```

2. Start the client application:
    ```sh
    npm run client
    ```

3. To start both the server and client together:
    ```sh
    npm start
    ```

4. Open `http://localhost:3000` in your browser.

## Libraries Used

### Server-side (Node.js):

- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **body-parser**: Node.js body parsing middleware.
- **mongoose**: Elegant MongoDB object modeling for Node.js.
- **bcryptjs**: Library to hash passwords.
- **jsonwebtoken**: JSON Web Token implementation (JWT) for Node.js.
- **express-session**: Simple session middleware for Express.

### Client-side (React):

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **react-router-dom**: DOM bindings for React Router.
- **axios**: Promise based HTTP client for the browser and Node.js.

## Project Structure

- `client/`: React client application
- `server.js`: Express server application
- `routes/`: API routes
- `models/`: Mongoose models
- `public/`: Public static files
- `src/`: React components and styles

## Usage

- Register: `/register`
- Login: `/login`
- View user information: `/user`

## Contributing

1. Fork the repository (create a copy of the project)
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a Pull Request


