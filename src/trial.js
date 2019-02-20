module.exports = function( app ){

	app.get( '/', ( req, res ) => {
		res.end( "Hi there!" );
	});

	app.get( '/login', ( req, res ) => {
		res.json( { success: true, user: { name: 'TriangularCube' } } );
	});


	/*
	app.service( 'login' ).create({
		strategy: 'local',
		username: 'bluntweapon',
		password: 'pillerjunction'
	});*/

	/*
	app.service( 'users' ).create({

		username: 'Bluntweapon'

	}).then( ( user ) => {

		console.log( 'Created user: ', user )

	});
	*/

};