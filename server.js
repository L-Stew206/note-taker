const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

const { v4: uuidv4 } = require('uuid');
app.use(express.static('public'));

// send the files 'notes.html'
app.get('/notes', (req,res) => {

    res.sendFile();

});

app.get('/api/notes', (req,res) => {

res.json();

});
 
app.post('/api/notes', (req,res) => {

    // create data
    // access the new note data from'req'
    //push it to my existsing list of notes
    // write my updated notes list to the 'db.json' file

});

 


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);