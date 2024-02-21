const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Sports Event Calendar API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
