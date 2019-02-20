const mongoose = require( 'mongoose' );

mongoose.Promise = global.Promise;

// Deprecation warning fixes
mongoose.set( 'useNewUrlParser', true );
mongoose.set( 'useFindAndModify', false );
mongoose.set( 'useCreateIndex', true );



module.exports = function( app ){

	mongoose.connect( app.get( 'mongooseDB' ) )
		.then(
			() => console.log( "MongoDB Connected" ),
			( rej ) => console.log( "Mongoose Connection Rejected: ", rej )
		)

};