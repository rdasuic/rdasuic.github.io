//
// Define database
//
var db = new Dexie("MyFriendDB");
db.version(1).stores({
	friends: '++id,name,age'
});
log ("Using Dexie v" + Dexie.semVer);

//
// Query Database
//
db.open().then(function(){

	return db.friends.add(
        {name: "Foo", age: 42, hometown: "NY"},
    );
  
}).then(function(){

	return db.friends
		.where('age')
		.between(40,65)
		.toArray();

}).then(function(friends){

	log("Found friends: " + JSON.stringify(friends, null, 2));
  
}).then(function(){
	return db.delete(); // So you can experiment again and again...
}).catch (Dexie.MissingAPIError, function (e) {
	log ("Couldn't find indexedDB API");
}).catch ('SecurityError', function(e) {
  log ("SeurityError - This browser doesn't like fiddling with indexedDB.");
  log ("If using Safari, this is because jsfiddle runs its samples within an iframe");
  log ("Go run some samples instead at: https://github.com/dfahlander/Dexie.js/wiki/Samples");
}).catch (function (e) {
	log (e);
});
