const express = require('express');
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.post('/', function(req, res){
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req,res,data,201);
        }).catch(e => {
            response.error(req,res,'Datos no validos',401,e);
        })
})

router.get('/', function(req, res){
    controller.getAllUsers()
        .then(data => {
            response.success(req,res,data,201);
        }).catch(e => {
            response.error(req,res,'file not found',404,e);
        })
})

module.exports = router;