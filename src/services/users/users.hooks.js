const { hashPassword, protect } = require( '@feathersjs/authentication-local' ).hooks;

module.exports = {

	before: {
		create: [
			hashPassword( { passwordField: "password" } )
		]
	},

	after: {
		all: [
			protect( 'password' )
		]
	}

};