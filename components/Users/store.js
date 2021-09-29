const Model = require('./model')


function addUser(user){
    const myUser = new Model(user);
    // Its a pro mise, internamente save () maneja el resolve and reject 
    // cuando llame la funcion debo manejar el resultado de la promesa
    // en el bloque controller
    return myUser.save();
}

async function getAllUsers(){
    const allUsers = await Model.find(); 
    return allUsers;
}

module.exports= {
    add: addUser,
    getAllUsers: getAllUsers,
}