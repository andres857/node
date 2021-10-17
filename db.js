// mongodb+srv://desarrollo:4LQaagZ2m3tCrc5@app.meoqu.gcp.mongodb.net/chat?retryWrites=true&w=majority
const db = require('mongoose');

db.Promise = global.Promise;

async function connect(url){
    await db.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    console.log('[db conexion] successfull');
};



module.exports = connect;

