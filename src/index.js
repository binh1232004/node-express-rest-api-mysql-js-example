const dotenv = require('dotenv');

// Always load .env file first
dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';

const config = require('config');
const PORT = config.get('PORT');

const app = require('./app');
app.listen(PORT, () => console.log(`Server is running in ${NODE_ENV} mode on port: ${PORT}`));
