const mongoose = require('mongoose')


const noteSchema = new mongoose.Schema({
    "title": String,
    "content": String
})

const noteModels = mongoose.model("note",noteSchema)
module.exports = noteModels