const  mongoose=require('mongoose');


const  productSchema=mongoose.Schema({
    name:String,
    title:String,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }]
})

const productmodel=mongoose.model('product', productSchema);

module.exports= productmodel;