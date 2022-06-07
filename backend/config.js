require('dotenv').config();

module.exports = {
    port: process.env.PORT || 3001,
    database: process.env.DATEBASE || 'mongodb://localhost:27017/notebook'
};