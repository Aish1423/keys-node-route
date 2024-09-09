const categoryModel = require('./categoryModel')

const add = async (req, res)=>{
    let validations = ""

    if(!req.body.name){   //nhi hai
        validations += "Name is require "
    }
    if(!req.body.description){
        validations += "Description is required "  //+= : value overright n hogi append hogi
    }

    if(!!validations){    //!!- string value into boolean
        res.send({
            success:false,
            status:420,       //find 420
            messaage:"validations error: "+validations
        })
    } else{
        let total= await categoryModel.countDocuments()
        let category = new categoryModel({
            autoId:total+1,
            name:req.body.name,
            description:req.body.description
        })
        category.save()
        .then((result)=>{
            res.send({
                success:true,
                status:200,
                messaage:"New category created",
                data:result
            })

        })
        .catch((err)=>{
            res.send({
                success:false,
                status:404,
                messaage:err.messaage
            })
        })
    }    
}

module.exports= { add }