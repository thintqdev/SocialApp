const route = require('express').Router()
const userController = require('../src/controllers/UserController')
const verify = require('../utils/verifyToken')
route.post('/', userController.create)
route.get('/', userController.showAll)
route.get('/:id', userController.show)
route.put('/:id', userController.update)
route.delete('/:id', userController.delete)
route.get('/token/info', userController.getInfoFromToken)
// route.get('/pagination/ok', userController.showWithPagination)
module.exports = route