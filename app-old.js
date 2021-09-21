
const http = require('http');

http.createServer( ( req, res ) => {

    //res.writeHead(200, { 'Content-Type': 'application/json'});

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csv' });



    res.write( 'id, nombre\n' );
    res.write( '1, Jhonnatan\n' );
    res.write( '2, aaaaaa\n' );
    res.write( '3, bbbbbb\n' );
    res.write( '4, cccccc\n' );


    res.end();

})
.listen( 8080 );



console.log( 'escuchando el puerto', 8080 );