const util = require('util');
const fs = require('fs');
const uuid = require('uuid');

//read and write file
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

//CLASSES
//Store reads the notes, writes them, and checks for all parsedNotes
class Store {
    read(){
        return readFileAsync("./db/db.json", "utf-8");
    }
    write(note){
        return writeFileAsync("./db/db.json", JSON.stringify(note));
    }
    getNotes(){
        this.read().then((notes) => {
            let parsedNotes
            try{
                parsedNotes = [].concat(JSON.parse(notes));
            }
            catch(error){
                parsedNotes = [];
            }
            return parsedNotes;
        })
    }
    addNote(note){
        const {title, text} = note;

        const newNote = {title, text, id:uuid()};
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((newDBNotes) => this.write(newDBNotes))
        .then(() => newNote)
    }
    deleteNote(id){
        return this.getNotes()
        .then((notes) => notes.filter((notes) => note.id !== id))
        .then((newDBNotes) => this.write(newDBNotes))
    }
}

module.exports = new Store();