//Required
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3001;
const { v4: uuidv4 } = require('uuid');

//Global
//var notes = require('.db/db.json');

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
app.post('/api/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    // Create data
    const { title, text } = req.body;
    //If the data matches
    if (title && text) {
        //Varible for the object will save
        const newNote = {
            title,
            text,
            id: uuidv4()
        };
    }
    
    
    const newNote = req.body;
    
    
    res.json('mesage for me')
    
});

//order of operattions below for lines above
// access the note data that was sent
// create data
// access the new note data from'req'
//push it to my existsing list of notes
// write my updated notes list to the 'db.json' file



app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);