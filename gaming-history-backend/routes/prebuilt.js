const express = require("express");
const router = express.Router();
const oracledb = require("oracledb");
const dbConfig = require("../config");

router.get("/", (req, res) => {
    res.json({ message: "This is the prebuilt query api" });
});

async function runQuery(sql_query, params = {}) {
    let connection;
    try {
        connection = await oracledb.getConnection(dbConfig);

        const result = await connection.execute(sql_query, params);
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

router.get("/test_query1", async (req, res) => {
    const sql_query = `SELECT * FROM SSCHLINGMANN.GENRE`;

    const result = await runQuery(sql_query);
    res.json(result);
});

router.get("/query1", async (req, res) => {
    // actual url called will be /query1?start=2009&end=2010
    // something like that to get the dates for start and end

    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `SELECT EXTRACT(YEAR FROM Release) AS Year, AVG(Playtime) AS AveragePlaytime
        FROM SSCHLINGMANN.Game
        WHERE EXTRACT(YEAR FROM Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM Release)
        ORDER BY Year`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

// router.get("/query2", async (req, res) => {
//     const start_year = parseInt(req.query.start_year);
//     const end_year = parseInt(req.query.end_year);

//     const sql_query = ``;

//     const result = await runQuery(sql_query);
//     res.json(result);
// });

router.get("/query2", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `SELECT EXTRACT(YEAR FROM Release) AS Year, COUNT(*) AS NumberOfGames
        FROM SSCHLINGMANN.Game
        WHERE EXTRACT(YEAR FROM Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM Release)
        ORDER BY Year`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

router.get("/query3", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `
        SELECT EXTRACT(YEAR FROM g.Release) AS Year, p.Name AS Platform, COUNT(*) AS NumberOfGames
        FROM SSCHLINGMANN.Game g
        JOIN SSCHLINGMANN.PlayableOn po ON g.GameID = po.GameID
        JOIN SSCHLINGMANN.Platform p ON po.PlatformID = p.PlatformID
        WHERE EXTRACT(YEAR FROM g.Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM g.Release), p.Name
        ORDER BY Year, Platform`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

router.get("/query4", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    // start year will be 2020 set by frontend
    // end year will be 2021 set by frontend

    const sql_query = `SELECT EXTRACT(YEAR FROM Release) AS ReleaseYear, COUNT(*) AS GamesReleased
        FROM SSCHLINGMANN.Game
        WHERE EXTRACT(YEAR FROM Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM Release)
        ORDER BY ReleaseYear`;

    // const result = await runQuery(sql_query);
    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

router.get("/query5", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `
        SELECT EXTRACT(YEAR FROM g.Release) AS Year, ge.Name AS Genre, COUNT(*) AS NumberOfGames
        FROM SSCHLINGMANN.Game g
        JOIN SSCHLINGMANN.GenreOf go ON g.GameID = go.GameID
        JOIN SSCHLINGMANN.Genre ge ON go.GenreID = ge.GenreID
        WHERE EXTRACT(YEAR FROM g.Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM g.Release), ge.Name
        ORDER BY Year, Genre`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

router.get("/query6", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `
        SELECT EXTRACT(YEAR FROM g.Release) AS Year, COUNT(*) AS NumberOfGames
        FROM SSCHLINGMANN.Game g
        JOIN SSCHLINGMANN.DevelopedBy db ON g.GameID = db.GameID
        WHERE EXTRACT(YEAR FROM g.Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM g.Release)
        ORDER BY Year`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

router.get("/query7", async (req, res) => {
    const start_year = parseInt(req.query.start_year);
    const end_year = parseInt(req.query.end_year);

    const sql_query = `
        SELECT EXTRACT(YEAR FROM g.Release) AS Year, COUNT(*) AS NumberOfGames
        FROM SSCHLINGMANN.Game g
        JOIN SSCHLINGMANN.PublishedBy pb ON g.GameID = pb.GameID
        WHERE EXTRACT(YEAR FROM g.Release) BETWEEN :start_year AND :end_year
        GROUP BY EXTRACT(YEAR FROM g.Release)
        ORDER BY Year`;

    const result = await runQuery(sql_query, { start_year, end_year });
    res.json(result);
});

module.exports = router;
