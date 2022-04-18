const route = require('express').Router()
const verify = require('../src/middleware/auth')
const postController = require('../src/controllers/PostController')

route.post('/', verify, postController.create)
route.get('/', postController.showAll )
route.get('/:id', postController.show)
route.put('/:id',verify ,postController.edit)
route.delete('/:id', verify, postController.destroy)
module.exports = route