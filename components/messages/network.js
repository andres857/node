const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')


router.get('/',(req, res)=>{
    
    const filterMessages = req.query.user || null;
    console.log(filterMessages);
    
    // Get the messages
    controller.getMessages(filterMessages)
    .then((listmessages)=>{
        response.success(req,res,listmessages,200);
    }).catch((e)=>{
        response.error(req,res,'Servicio no disponible',400,e);
    })
})

router.post('/',(req, res)=>{

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage)=>{
            response.success(req,res,fullMessage,201);
        }).catch((e)=>{
            response.error(req,res,'Informacion invalida',400,e);
        })
    
})

router.patch('/:id', function(req,res){
    console.log(`--------- ${req.params.id}`);

    controller.updateMessages(req.params.id, req.body.message)
        .then((updateMessage)=>{
            response.success(req,res,updateMessage,201);
        }).catch((e) =>{
            response.error(req,res,'error interno',400,e);
        })
    
})

router.delete('/:id', function(req,res){
    controller.deleteMessages(req.params.id)
        .then(()=>{
            response.success(req,res,`El mensaje ${req.params.id} a sido eliminado`,210);
        }).catch((e)=>{
            response.error(req,res,'error interno',400,e)
        })
})



module.exports = router;