const mysql = require('mysql2/promise');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_USERNAME_PASSWORD = process.env.DB_USERNAME_PASSWORD;

const connectionOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD,
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();
        console.log('MySQL database connected!');
    } catch (err) {
        console.error('MySQL database connection error!');
        console.error('Details:', err.message);
        console.error('Connection config:', {
            host: DB_HOST,
            port: DB_PORT,
            user: DB_USERNAME,
            database: DB_NAME
        });
        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;
