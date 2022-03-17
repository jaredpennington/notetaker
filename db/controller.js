const path = require('path');
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
    return readFileAsync('db/db.json', 'utf8');
}

//function write to write a custom note to db.json

const getNotes = exports.getNotes = function() {
    return read().then((notes) => {
        let readNotes = JSON.parse(notes) || [];
        return readNotes;
    })
}

const writeNotes = exports.writeNotes = function(notes) {
    if (typeof notes === 'string') {
        writeFileAsync('db/db.json', notes)
    }
    else {
       return writeNotes(JSON.stringify(notes))
    }

}

// fs.writeFile(${fileName}(${--i}).md, generateMarkdown(data), function (err) {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(${fileName}(${i}) successfully generated.);
// });

//Write out function to add a note to the DB.json file
    // -read the current notes and parse into an array
    // Push new note into that array
    //then return the note in a res.json(note)

