const express = require('express')
const NotesModel = require('../models/models.notes')


const routes = express.Router()


/**
 * --- Route: To fetch user's notes(/:uid)
 * --- Method: GET
 **/


routes.route('/get/:uid').get(async (req, res) => {
    const ifUidExists = await NotesModel.find({ uid: req.params.uid })
    if (ifUidExists) {
        await NotesModel.find({uid: req.params.uid}, (err, docs) => {
            if (err) {
                res.status(400).send(err);
            } else {    
                res.status(200).send(docs)
            }
        })
    } else {
        res.send('Nothing to Show')
    }
})


/**
 * --- Route: To post user's notes to the DB (/post/:uid)
 * --- Method: POST
 **/


routes.route('/post/:uid').post(async (req, res) => {
    
    try {
        const id = req.params.uid
        const title = req.body.title
        const notes = req.body.notes      
        
        const NotesModelInstance = new NotesModel({
            uid: id,
            title: title,
            notes: notes
        })

        NotesModelInstance.save()
            .then(() => res.status(200).send(`Note Saved`))
            .catch(err => res.status(400).send(`${JSON.stringify(err)}`))
    } catch (error) {
        res.send(error)
    }
})
 

module.exports = routes
