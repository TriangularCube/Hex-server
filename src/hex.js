const http = require( 'http' );

const feathers = require( '@feathersjs/feathers' );
const config = require( '@feathersjs/configuration' );
const express = require( '@feathersjs/express' );

// Start Feathers App
const app = express( feathers() );

// Apply configs
app.configure( config() );

console.log( app.get( 'port' ) );

app.get( '/', ( req, res ) => {
	res.end( "Hi there!" );
});

app.get( '/login', ( req, res ) => {
	res.json( { success: true, user: { name: 'TriangularCube' } } );
});


let server = http.createServer( app );
server.listen( app.get( 'port' ) );