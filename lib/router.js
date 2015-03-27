Router.configure({
	layoutTemplate: 'layout'
	
});
Router.route('/',function(){
	if(Meteor.userId()){
		this.render('dashboard');
	}else{
		this.render('home');
	}
});

Router.route('/login',function(){
	this.render('login');
});

Router.route('/signup',function(){
	this.render('signup');
});