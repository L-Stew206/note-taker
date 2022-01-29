//Required
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const { v4: uuidv4 } = require('uuid');

//Global
var notes = require('.db/db.json');

// Express (Middleware)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Get HTML files
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//Get request for notes from JSON
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
    console.info(`${req.method} request received to get notes`);
});

//Post request for notes from JSON
//Create data
//If the data matches
//Varible for the object will save
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
        notes.push(newNote);
        const noteString = JSON.stringify(newNote);
        fs.writeFile(`db/db.json`, noteString, (err) =>
            err ? console.error(err) : console.log("success")
        );
        res.status(201).json(newNote);
    } else {
        res.status(500).json('Error in posting note');
    }
});

//Local port listening
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

//When user types anything they are returned to homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

