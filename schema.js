/*	
 *	schema.js
 *	Allison Pine - IDHack 2016
 *	MongoDB Schema File
 * 	Database Name: ImpactGrid
 *	Purpose: defines the project and organization schema + their methods and static functions for adding/searching the database
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ImpactGrid');

// Define the schemas
var Schema = mongoose.Schema;
var orgSchema = new Schema({name: String, headquarters: String, mission: String, leadership: String, history: String, website: String, topics: Array, type: String, size: Number});
var projSchema = new Schema({name: String, location: String, mission: String, leadership: String, length: Number, website: String, topics: Array, need: String, offer: String, type: String, size: Number, budget: Number})


// Define Organization methods
orgSchema.methods.addOrganization = function () {

	// Casing and checks
	this.name = this.name.toUpperCase();
	this.headquarters = this.headquarters.toUpperCase();

	this.save(
		function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Added new organization.");
			}
		}
	);
}


// Define projSchema methods (for specific instances i.e. proj1.func()) and statics (for models i.e. Project.func())
// ( to create: var proj1 = new Project({...}); )

projSchema.methods.addProject = function () {

	// Casing and checks
	this.name = this.name.toUpperCase();
	this.location = this.location.toUpperCase();

	this.save(
		function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log("Added new project.");
			}
		}
	);
}

projSchema.statics.queryByName = function (name_in, cb) {
	return this.find({name: name_in}, cb);
}

projSchema.statics.queryByLocation = function (loc_in, cb) {
	return this.find({location: loc_in}, cb);
}

projSchema.statics.queryByType = function (type_in, cb) {
	return this.find({type: type_in}, cb);
}

// Define the collections as mongoose models 
// (must be at bottom to compile methods)
var Organization = mongoose.model('Organization', orgSchema);
var Project = mongoose.model('Project', projSchema);

// Export models for use
module.exports = Organization;
module.exports = Project;

























