const ValidationContract = require('../validators/fluent-validatior');
const repository = require('../repository/product-repository');;

exports.get= async(req, res, next)=> {
    try{
        var data = await repository.get();
        res.status(200).send(data);
    }catch(e){
        res.status(500).send({message:"Falha ao processar sua requisição"});
    }
    
};

exports.getBySlug= async(req, res, next)=> {
    try{
        var data = await repository.getBySlug(req.params.slug);
        res.status(200).send(data);

    }catch(e){
        res.status(400).send({message:"Falha ao processar sua requisição"});
    }
  
};

exports.getById= async(req, res, next)=> {
    try{
        var data = await  repository.getById(req.params.id);        
        res.status(200).send(data);

    }catch(e){
        res.status(400).send({message:"Falha ao processar sua requisição"});
    }
      
};

exports.getByTag= async(req, res, next)=> {
    try{
        var data = await  repository.getByTag(req.params.tag) ;        
        res.status(200).send(data);

    }catch(e){
        res.status(400).send({message:"Falha ao processar sua requisição"});
    }
    
};

exports.post =async (req, res, next) =>{

    try{
        
        console.log(req.body.description);
        let contract = new ValidationContract();
            contract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres');
            contract.hasMinLen(req.body.slug, 3, 'O título deve conter pelo menos 3 caracteres');
            contract.hasMinLen(req.body.description, 3, 'O título deve conter pelo menos 3 caracteres');
        
            // Se os dados forem inválidos
            if (!contract.isValid()) {
                res.status(400).send(contract.errors()).end();
                return;
            }
        
            var data = await  repository.Create(req.body);
            res.status(201).send("Salvo com sucesso");

    }catch(e){
        res.status(400).send(e);
    }
    
};

exports.put= async(req, res, next) =>{
    try{
        var data = await  repository.update(req.params.id,req.body);        
        res.status(200).send("Alterado com sucesso");

    }catch(e){
        res.status(400).send({message:"Falha ao processar sua requisição"});
    }    
};
  

exports.delete= async(req, res, next)=> {

    try{
        var data = await  repository.delete(req.body.id);        
        res.status(200).send("Deletado com sucesso");
    }catch(e){
        res.status(400).send({message:"Falha ao processar sua requisição"});
    }    
    
};
