const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');

module.exports = function (app) {

	const config = app.get('authentication');
	const jwtConfig = app.get( 'jwtOptions' );

	// Set up authentication with the secret
	app.configure(authentication(config));
	app.configure( jwt( jwtConfig ) );
	app.configure(local());


	// The `authentication` service is used to create a JWT.
	// The before `create` hook registers strategies that can be used
	// to create a new valid JWT (e.g. local or oauth2)
	app.service('login').hooks({
		before: {
			create: [
				( context ) => console.log( context ),
				authentication.hooks.authenticate( config.strategies )
			],
			remove: [
				( context ) => console.log( context ),
				authentication.hooks.authenticate('jwt')
			]
		}
	});

};