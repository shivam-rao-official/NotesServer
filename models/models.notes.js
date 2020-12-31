const mongoose = require('mongoose')


const NotesSchema = mongoose.Schema({
    uid: {
        type: Number,
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