Template.dashboard.events({
	'click #getFriends':function(e,t){
		Meteor.call('getFriendlist',function(err,res){
			if(!err){
				var x;
				var all = [];
				var name = "";
				 var id = "";			
				for(x in res)
				{
					all = res[x];
					
					for(var i=0;i<all.length;i++)
					{
						fbid = all[i].id;
						name = all[i].name;
						Meteor.call('insertData',fbid,name,function(err,res){
						if(!err){
							alert('saved');
						}
					});
					}
				}
						
		}                                                                                    
		});
		}
	
});