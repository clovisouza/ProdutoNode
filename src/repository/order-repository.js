const mongoose = require('mongoose');
const Order = mongoose.model('Order');


exports.get= async()=> {
    
        console.log('passe');
        var data = await Order.find({})
         .populate('customer');        
        console.log(data);
       return data;        
};
 

exports.Create = async(body) =>{    
    console.log(body);
        var order = new Order(body);
        await orderorder.save();        
};