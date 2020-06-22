const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');


exports.Create = async(body) =>{    
    console.log('repository');
        var customer = new Customer(body);
        await customer.save();        
};