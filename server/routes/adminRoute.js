const router = require('express').Router() //connectivity
const userController = require('../api/user/userController')
const categoryController = require('../api/category/categoryController')

router.post('/user/add',userController.add() )

// router.post(/)

router.all("**",(req,res)=>{             //wild card(*)
    res.send({
        success:false,
        status:404,
        message:'INVALID ADDRESS'
    })
})             //method
module.exports = router

