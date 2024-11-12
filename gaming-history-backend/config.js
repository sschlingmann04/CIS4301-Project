require("dotenv").config();

const dbConfig = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    connectString: process.env.CONNECT_STRING,
};

module.exports = dbConfig;
