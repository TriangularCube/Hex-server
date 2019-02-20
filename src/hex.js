const http = require( 'http' );

const feathers = require( '@feathersjs/feathers' );
const config = require( '@feathersjs/configuration' );
const express = require( '@feathersjs/express' );
const cors = require( 'cors' );

const mongooseConfig = require( './configurations/mongoose' );

const authentication = require( './authentication' );
const services = require( './services' );

// Start Feathers App
const app = express( feathers() );

const corsOptions = {
	origin: 'http://localhost:1234'
};
app.options( '*', cors( corsOptions ) );
app.use( cors( corsOptions ) );

// Apply configs
app.configure( config() );
app.configure( mongooseConfig );

// Turn on Parsers
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

// Configure REST
app.configure( express.rest() );

// Configure Authentication
app.configure( authentication );

// Register Services
app.configure( services );



let server = app.listen( app.get( 'port' ) );

console.log( 'Starting Server' );



// Run the trial scripts
require( './trial' )( app );




