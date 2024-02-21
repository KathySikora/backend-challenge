const db = require('./db');

const initDb = () => {
    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS Sports (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            );
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Teams (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            );
        `);

        db.run(`
            CREATE TABLE IF NOT EXISTS Events (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                date TEXT NOT NULL,
                time TEXT NOT NULL,
                sport_id INTEGER,
                team1_id INTEGER,
                team2_id INTEGER,
                location TEXT,
                FOREIGN KEY (sport_id) REFERENCES Sports(id),
                FOREIGN KEY (team1_id) REFERENCES Teams(id),
                FOREIGN KEY (team2_id) REFERENCES Teams(id)
            );
        `);
    });
};

initDb();
