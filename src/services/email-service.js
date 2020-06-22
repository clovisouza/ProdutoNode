var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridKey);



exports.send= async(to,subject,body)=> {
    sendgrid.send({
        to:to,
        from:'clovis@souza2011@hotmail.com',
        subject:subject,
        html:body
    });
 };