let express = require('express')
let db = require('../models')
let Player = db.Player

let router = express.Router()

router.get('/players', function(req, res, next) {
    Player.findAll( {order: ['name']} ).then( players => {
        return res.json(players)
    }).catch( err => next(err))
})

router.post('/players', function(req, res, next) {
    Player.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( e => e.message )
            // 400 = bad request from user
            return res.status(400).json(messages)
        }
        return next(err)
    })
})

//this handles the requests to any of the players
router.patch('/players/:id', function(req, res, next) {
    Player.update( req.body, { where: { id: req.params.id } })
    .then( rowsModified => {
        if (!rowsModified[0]) {
            // 404 = not found, player with this ID not found
            return res.status(404).send('Not Found')
        } else {
        return res.send('ok')
        }
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( (e) => e.message)
            // 400 code = bad request from user
            return res.status(400).json(messages)
        }
        return next(err)
    })
})

//this handles when players want to get deleted from roster
router.delete('/players/:id', function(req, res, next) {
    Player.destroy({where: {id: req.params.id}}).then( rowsModified => {
        return res.send('ok')
    }).catch( err => next(err) )
})

module.exports = router