const Beer = require('../models/games')

module.exports = {
  create: (req, res, next) => {
    let games = new Games(req.body)

    games.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Games.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Games.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Games.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Games.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Games deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}