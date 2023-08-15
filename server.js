const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const errorHandler = require('./middleware/error');
const dbconnect = require('./config/db');
const bootcamps = require('./routes/route');

// Load environment variables
dotenv.config({ path: './config/.env' });

// Create the Express app
const app = express();

// Connect to the database
dbconnect();

// Middleware for JSON body parsing
app.use(express.json());

// Logging middleware for development mode
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Mount your routes
app.use('/api/v1/bootcamps', bootcamps);

// Error handling middleware
app.use(errorHandler);

// Set up the server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
    // Close the server and exit gracefully
    server.close(() => process.exit(1));
});
