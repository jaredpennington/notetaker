const express = require('express');
const router = express.Router();
const path = require('path');

const controller = require('../db/controller');

const { nanoid } = require('nanoid')
let id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

console.log(id)

router.get('/notes', (req, res) => {
    controller
    .getNotes()
    .then((notes) => {
        //console.log(notes[0].id, notes[1].text,  typeof notes)
        notes.forEach((a) => {
            //console.log(a.text, a.id)
            a.id = nanoid()
        })
        console.log(notes)
        res.json(notes)
    })
    .catch((err) => {
        res.status(500).json(err)
        console.log(err)
    })
})

router.post('/notes', (req, res) => {
    controller.getNotes()
    .then((notes) => {
        // console.log(notes)
        notes.push(req.body)
        return notes
    })
    .then(data => {
        controller.writeNotes(data)
    })
    controller.getNotes()
    .then((notes) => {
        // console.log(notes)
        res.json(notes)
    })
})


// router.post route to create the note to the database similar structure to the router.get

module.exports = router;