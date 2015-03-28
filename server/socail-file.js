ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "430202220475780",
      loginStyle: "popup",
      secret: "efbe6fd24c35fae835010380e13d8617"
    }
  }
);
Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
        user.profile = options.profile;
    }
    return user;
});