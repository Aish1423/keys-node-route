const router = require('express').Router()

router.all("**", (req, res)=>{
    res.send({
        success:false,
        status:404,
        message:"invalid address"
    })
})


module.exports = router