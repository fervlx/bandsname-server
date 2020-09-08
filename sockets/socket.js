const { io } = require('../index');

//test
io.on('connection', client => {
    
    console.log( "cliente conectado", client.id );

    client.on('disconnect', () => { 
        console.log( "cliente desconectado", client.id );
    });

    client.on('message', ( payload ) => {
        console.log( payload );
    });

    //emite a todos los cliente conectados
    io.emit('message', { admin: 'mensaje recibido.' });
});