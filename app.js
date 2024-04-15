console.log("El servidor está iniciando...");


const express = require('express');
const app = express();


app.use(express.static('public'));

app.listen(3000,function(){
    console.log("El servidor es http://localhost:3000");
});

