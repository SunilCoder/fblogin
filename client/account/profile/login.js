Template.login.events({
	'submit #loginForm':function(e,t){
		e.preventDefault();
		
			email=t.find('#userEmail').value,
			password=t.find('#userPassword').value
		
		Meteor.loginWithPassword(email,password,function(err,res){
			if(!err){
				Router.go('/');
			}else{
				$('#logError').text(err.reason);
			}
		});
	},
	'click #facebookConnect':function(e,t){
		e.preventDefault();
		Meteor.loginWithFacebook({requestPermissions: ['user_friends']},function(err,res){

			if(!err){
				Router.go('/');

			}else{
				throw new Meteor.Error("Facebook login failed");
			}
		});
	}
});