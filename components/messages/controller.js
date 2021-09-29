const store = require('./store');


function addMessage(user,message){
    return new Promise((resolve,reject)=>{
        
        if (!user || !message){
            console.error('[messageController] No hay usuario o mensaje');
            return reject('los datos son incorrectos')
        }else{
            const fullMessage = {
                user:user,
                message:message,
                date: new Date(),
            }
            console.log(fullMessage);
            store.add(fullMessage)
            resolve(fullMessage)
        }
    })
    
}

function getMessages(filterUser){
    return new Promise((resolve,reject)=>{
        resolve(store.list(filterUser));
    })
}

async function updateMessages(id,message){
    return new Promise(async (resolve,reject)=>{
        if (!id || !message){
            return reject('No hay usuario o mensaje');
        }
       const updateMessage = await store.updateText(id,message);
       resolve(updateMessage);
    })
}

function deleteMessages(id){
    return new Promise((resolve, reject)=>{
        if (!id){
            return reject(console.log(`id invalido ${id}`));
        }else{
            store.delete(id)
                .then(()=>{
                    resolve();
                }).catch((e)=>{
                    reject(e);
                })
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessages,
    deleteMessages
};