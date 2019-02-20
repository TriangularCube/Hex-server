const createService = require( 'feathers-mongoose' );

const Model = require( '../../models/users.model' );
const hooks = require( './users.hooks'  );

module.exports = function( app ){

	let service = createService({
		Model,
		lean: true
	});

	app.use( '/users', service );

	app.service( 'users' ).hooks( hooks );

};