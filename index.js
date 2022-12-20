const express = require('express');
//Inicializamos express
const app = express();
const path = require('path');
require('dotenv').config();
require('./sockets/socket.js');    
const server = require('http').createServer(app);

const publicPath = path.resolve( __dirname, "public" )
app.use( express.static( publicPath ) );

server.listen( process.env.PORT, (error) => {
    
    if(error) throw Error(error);
    console.log( 'Servidor corriendo en puerto', process.env.PORT );
});


module.exports.io = require( 'socket.io' ) (server)

