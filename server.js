const express = require('express');
const bodyparser = require('body-parser');
const connect = require('./db');
const router = require('./network/routes');


connect('mongodb+srv://desarrollo:4LQaagZ2m3tCrc5@app.meoqu.gcp.mongodb.net/chat?retryWrites=true&w=majority');


const app = express();
app.use(bodyparser.json());
router(app)



app.use('/app', express.static('public'));

app.listen('3000')
console.log('app running on port http://localhost:3000');