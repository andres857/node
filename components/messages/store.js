const Model = require('./model')


function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

function getMessage(filterUser){
    return new Promise((resolve,reject)=>{
        let filter = {};
        if(filterUser !== null){
            filter ={
                user:filterUser
            }
        }
        Model.find(filter)
            .populate('user')
            .exec((err,populated)=>{
                if(err){
                    return reject(err);
                }else{
                    resolve(populated);
                }
            })
    })    
}

async function updateMessages(id,message){
    const foundmessage = await Model.findOne({
        _id: id,
    });
    foundmessage.message = message;
    const updateMessage = await foundmessage.save();
    return updateMessage

}

function removeMessages(id){
    return Model.deleteOne({
        _id:id
    })
}


module.exports= {
    add: addMessage,
    list: getMessage,
    updateText:updateMessages,
    delete:removeMessages,
    // get
    // update
    // delete
}