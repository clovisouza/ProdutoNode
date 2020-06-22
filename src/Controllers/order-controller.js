const ValidationContract = require('../validators/fluent-validatior');
const repository = require('../repository/order-repository');;
const guid = require('guid');



exports.get= async(req, res, next)=> {
    try{
        var data = await repository.get();
        console.log(data);
        res.status(200).send(data);
    }catch(e){
        console.log(e);
        res.status(500).send({message:"Falha ao processar sua requisição"});
    }
    
};
 

exports.post =async (req, res, next) =>{
    
    
    try{       
            await  repository.Create({
                customer:req.body.customer,
                number:guid.raw().substring(0,6),
                items:req.body.items                
            });
            res.status(201).send({message:"Usuário salvo com sucesso"});

    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
    
};
