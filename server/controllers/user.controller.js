const {User}= require ('../models')
const _ = require ('lodash')
const createError = require ('http-errors')



module.exports.getAllUsers = async (req,res,next)=>{
    try {

      const users =  await User.findAll({
        attributes:{
            exclude:['password']
        }
      })
      res.status(200).send({data:users})
    } catch (error) {
        next(error)
    }
}


module.exports.createUser = async (req,res,next)=>{
    try {
        const {body}= req;
        if(req.file){
            body.avatar = req.file.filename;
        }
        const values = _.pick(body, ['login', 'password', 'avatar'])
        const user=await User.create(values)
        if(!user){
            next(createError(400, 'Invalid data'))
        }
        //1 var
        // user.password = undefined;
        // res.status(201).send({ data: user });
        //2 var
         const userPrepare = _.omit(user.get(), ['password'])
        res.status(201).send({data: userPrepare})
    } catch (error) {
        next(error)
    }
}