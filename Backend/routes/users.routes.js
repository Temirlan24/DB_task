const Router = require("express");
const router = Router();

const usersController = require('../controllers/users.controller')

router.post('/', usersController.createUser)
router.get('/', usersController.getUsers)
router.get('/:id', usersController.getUser)
router.put('/:id', usersController.updateUser)
router.delete('/:id', usersController.deleteUser)

module.exports = router;