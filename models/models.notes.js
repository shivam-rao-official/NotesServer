const mongoose = require('mongoose')


const NotesSchema = mongoose.Schema({
    uid: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true
    }
}, {
    timeStamps: true
})


module.exports = mongoose.model("NotesModel", NotesSchema)
