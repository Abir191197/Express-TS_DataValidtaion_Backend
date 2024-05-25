# Express TypeScript Data Validation Backend

This project is an Express.js backend application developed using TypeScript for data validation.

## Setup Instructions

Follow these steps to run the application locally:

### Prerequisites

1. **Node.js and npm**: Ensure that Node.js and npm are installed on your machine. You can download and install Node.js from [here](https://nodejs.org/).

2. **MongoDB**: MongoDB should be installed and running locally on your machine. You can download and install MongoDB from [here](https://www.mongodb.com/try/download/community).  


### Installation

1. **Clone the Repository**: Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Abir191197/Express-TS_DataValidtaion_Backend.git
    ```

2. **Navigate to the Project Directory**: Open a terminal and navigate to the project directory:

    ```bash
    cd Express-TS_DataValidtaion_Backend
    ```

3. **Install Dependencies**: Install the project dependencies using npm:

    ```bash
    npm install
    ```

### Configuration

1. **Environment Variables**: Create a `.env` file in the root directory of the project.

2. **Define Environment Variables**: Define the following environment variables in the `.env` file:

    ```plaintext
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/your-database-name
    ```

    Replace `your-database-name` with the name of your MongoDB database.

### Running the Application

1. **Build TypeScript Code**: Build the TypeScript code using the following command:

    ```bash
    npm run build
    ```

2. **Start the Application in Production Mode**: To start the application in production mode, run:

    ```bash
    npm start:prod
    ```

3. **Start the Application in Development Mode**: To start the application in development mode with automatic restart on code changes, run:

    ```bash
    npm start:dev
    ```

4. **Access the Application**: The application should now be running on `http://localhost:3000`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
