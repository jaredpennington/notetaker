const path = require('path');
const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

function read() {
    return readFileAsync('./db.json', 'utf8');
}

const getNotes = exports.getNotes = function() {
    return read().then((notes) => {
        let readNotes = JSON.parse(notes) || [];
        return readNotes;
    })
}

