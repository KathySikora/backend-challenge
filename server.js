const express = require('express');
const db = require('./database/db');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Sports Event Calendar API');
});

app.get('/api/events', (req, res) => {
    const sql = `SELECT Events.id, Events.date, Events.time, Sports.name AS sport,
                        Team1.name AS team1, Team2.name AS team2, Events.location
                 FROM Events
                          JOIN Sports ON Events.sport_id = Sports.id
                          JOIN Teams AS Team1 ON Events.team1_id = Team1.id
                          JOIN Teams AS Team2 ON Events.team2_id = Team2.id`;

    db.all(sql, [], (err, rows) => {
        console.log("Rows returned: ", rows.length);
        if (err) {
            console.error("Error fetching events: ", err.message);
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        });
    });

});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
