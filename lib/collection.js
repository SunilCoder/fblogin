 names=new Meteor.Collection('names');

 Meteor.methods({
 	'insertData':function(fbid,username){
 		console.log(username);
 		console.log(fbid);
 		
 		 		names.insert({'fbid':fbid,'name':username});
 	}
 });
