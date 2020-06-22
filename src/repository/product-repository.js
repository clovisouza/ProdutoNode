const mongoose = require('mongoose');
const Product = mongoose.model('Product')


exports.get= async()=> {
   const res = await Product.find({
        active:true
    },'title slug price');   
    return res; 
};


exports.getBySlug= async(Slug)=> {
    const res = await Product.findOne({
        slug: Slug,
        active:true
    });
    return res;
};


exports.getById= async(Id)=> {
   Product.findById(Id);    
};

exports.getByTag= (tag)=> {
   Product.find({tags:tag,
     active:true   
    });    
};


exports.Create = async(body) =>{
    
    console.log('repository');
        var product = new Product(body);
        await product.save();
        console.log('repository');
        
};

exports.update =async (id,body) =>{
    
   await  Product.findByIdAndUpdate({
        $set:{
            title:body.title,
            description:body.description,
            price:body.price
        }
    
});

};



exports.delete =async (id) =>{
    await  Product.findOneAndRemove(id);
};