# Express.js Boilerplate

A clean and modular Express.js boilerplate with flexible database connection support. This starter kit provides a structured foundation for building robust and scalable web applications with support for MongoDB, MySQL, and PostgreSQL.

## Features

- Modular folder structure for better organization
- Flexible database connection setup for MongoDB, MySQL, and PostgreSQL
- Built-in error handling middleware
- Environment configuration with `.env` file
- Utility functions for consistent response formatting

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Adlichalbi/express-boilerplate.git
   
2. **Navigate into the project directory**
   ```bash
   cd express-boilerplate

3. **Install dependencies**
   ```bash
   npm install

4. **Create a `.env` file:**
   Copy the `.env.example` file to `.env` and update the environment variables as needed.
   ```bash
   cp .env.example .env

## Folder Structure

- `config/`: Configuration files (e.g., database connection).
- `middleware/`: Custom middleware (e.g.,errorHandling ,validation, authentication).
- `routes/`: Route definitions.
- `models/`: Database models (e.g., Mongoose schemas or Sequelize models).
- `controllers/`: Request handling logic.
- `utils/`: Utility functions or helper methods.
- `index.js`: Main application entry point.

## Configuration 
- `MONGO_URI`: Connection string for MongoDB (if using MongoDB).
- `DB_HOST` ,`DB_USER` ,`DB_PASS` , `DB_NAME`: Connection details for MySQL or PostgreSQL (if using MySQL or PostgreSQL).
- `PORT`: Port number to run the server on.

## Contributing
Feel free to open issues or submit pull requests to improve this boilerplate. Contributions are welcome!

## License
This project is licensed under the MIT License.
