const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

//const autoIncrement = require( 'mongoose-sequence' )( mongoose );
const autoIncrement = require( 'mongoose-auto-increment-reworked' ).MongooseAutoIncrementID;

const UserSchema = new Schema({
	_id: Number,
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
}, { _id: false } );// Disable auto generation of _id field

//UserSchema.plugin( autoIncrement ); // Default field is _id


const plugin = new autoIncrement( UserSchema, 'User', { startAt: 0 } );
plugin.applyPlugin().catch(
	( err ) => console.log( "Error in Auto Increment: ", err )
);

const model = mongoose.model( 'User', UserSchema );

module.exports = model;