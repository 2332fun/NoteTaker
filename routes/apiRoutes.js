const router = require('express').Router();
const store = require('../db/store');

//To Do: GET Route For Notes
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    })
    .catch((error) => res.status(500).json(error));
})

//To Do: POST Route For New Notes
router.post('/notes', (req, res) => {
    store.addNote(req.body).then((note) => {
        return res.json(note);
    })
})
//To Do: DELETE Route For Deleting Notes
router.delete('/notes', (req, res) => {
    store.deleteNote(req.params.id).then(() => {
        res.json({ok:true});
    })
})

module.exports = router;