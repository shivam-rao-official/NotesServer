const express = require('express')
const mongoose = require('mongoose')
const notesRoute = require('./routes/notes.routes')


const app = express()

require('dotenv/config')
const URI = process.env.NODE_ENV


mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const connection = mongoose.connection
connection.once('open', () => {
    console.log(`Database is connected`);
})

app
    .listen(process.env.PORT || 5000)


app
    .use(express.json())
    .use('/', notesRoute)