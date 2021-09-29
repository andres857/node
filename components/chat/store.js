const Model = require('./model')


function addChat(chat){
    const myUser = new Model(chat);
    return myChat.save();
}

function listChats(userId){
    return new Promise((resolve,reject)=>{
        let filter = {};
        if (userId){
            filter = {
                users:userId
            }
        }
        Model.find(filter)
             .populate('users')
             .exec((err,populated)=>{
                 if (err){
                     return reject(err);
                 }else{
                     resolve(populated);
                 }
             })
    })
}

module.exports= {
    addChat,
    listChats,
}