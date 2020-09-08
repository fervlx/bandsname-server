const express = require('express');
const path = require('path');

require('dotenv').config();

//express server
const app  = express();

//node server
const server = require('http').createServer( app );

//socket
module.exports.io = require('socket.io')( server );
require('./sockets/socket');


//public folder
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ));

server.listen( process.env.PORT, ( error ) => { 

    if ( error ) throw new Error(error);

    console.log(` server is running. port ${ process.env.PORT }`);
});