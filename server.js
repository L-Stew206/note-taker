const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const { v4: uuidv4 } = require('uuid');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const notes = require ('.db/db.json');

// send the files 'notes.html'
app.get('/notes', (req,res) => {

    res.sendFile( path.join(__dirname, 'public/notes.html'));

});

app.get('/api/notes', (req,res) => {

res.json();

});
 
app.post('/api/notes', (req,res) => {

    // access the note data that was sent
    const newNote = req.body;
    // create data
    // access the new note data from'req'
    //push it to my existsing list of notes
    // write my updated notes list to the 'db.json' file

    res.json('mesage for me')

});

 


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);