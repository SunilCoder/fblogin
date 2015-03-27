/*ServiceConfiguration.configurations.remove({
	service:'facebook'
});

ServiceConfiguration.configurations.insert({
	service:'facebook',
	appId: '430202220475780',
	secret
});*/

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