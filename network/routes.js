const messages = require('../components/messages/network')
const user = require('../components/Users/network')
const chat = require('../components/chat/network')


const routes = function(server){
    server.use('/message', messages)
    server.use('/user', user)
    server.use('/chat', chat)
}

module.exports = routes;