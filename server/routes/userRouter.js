const {Router} = require ('express')
const UserController = require ('../controllers/user.controller')
const {upload} =require('../middleware/upload.mv')
const userRouter = Router();

userRouter.post('/', upload, UserController.createUser)
userRouter.get('/',  UserController.getAllUsers)
// userRouter.get('/')
// userRouter.get('/:userId')
// userRouter.patch('/:userId')

module.exports = userRouter