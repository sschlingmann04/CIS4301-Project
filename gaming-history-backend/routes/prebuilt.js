const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");
const dbConfig = require("../config");

router.get("/", (req, res) => {
    res.json({ message: "This is the prebuilt query api" });
});

async function runQuery(sql_query) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(sql_query);
        console.log(result.rows);

        return result.rows;
    } catch (error) {
        console.error("Error executing query:", error);
        return [];
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

router.get("/query1", async (req, res) => {
    const sql_query = `SELECT * FROM AIRPORT`;

    const result = await runQuery(sql_query);
    res.json(result);
});

module.exports = router;
