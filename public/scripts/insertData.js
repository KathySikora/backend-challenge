const db = require('../../database/db');

const insertData = () => {
    const sports = [
        { name: 'Football' },
        { name: 'Ice Hockey' }
    ];

    const teams = [
        { name: 'Salzburg' },
        { name: 'Sturm' },
        { name: 'KAC' },
        { name: 'Capitals' }
    ];

    const insertSports = db.prepare('INSERT INTO Sports (name) VALUES (?)');
    for (const sport of sports) {
        insertSports.run(sport.name);
    }
    insertSports.finalize();

    const insertTeams = db.prepare('INSERT INTO Teams (name) VALUES (?)');
    for (const team of teams) {
        insertTeams.run(team.name);
    }
    insertTeams.finalize();

    db.run(`INSERT INTO Events (date, time, sport_id, team1_id, team2_id, location) VALUES (?, ?, ?, ?, ?, ?)`,
        ['2019-07-18', '18:30', '3', '1', '2', 'Salzburg Stadium'],
        function(err) {
            if (err) {
                return console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        }
    );
};

insertData();
