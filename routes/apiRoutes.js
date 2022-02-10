const router = require('express').Router();
const store = require('../db/store');

//GET Route For Notes
router.get('/notes', (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    })
    .catch((error) => res.status(500).json(error));
})

//POST Route For New Notes
router.post('/notes', (req, res) => {
    store.addNote(req.body).then((note) => {
        res.json(note);
    })
    .catch((error) => res.status(500).json(error));
})
//DELETE Route For Deleting Notes
router.delete('/notes', (req, res) => {
    store.deleteNote(req.params.id).then(() => {
        res.json({ok:true});
    })
    .catch((error) => res.status(500).json(error));
})

module.exports = router;