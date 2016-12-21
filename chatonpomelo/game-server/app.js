var pomelo = require('./../../');

/**
 * Init app for client.
 */
var app = pomelo.createApp();
app.set('name', 'chatonpomelo');

// app configuration
/*
 * pomelo 서버는 서버구동시(pomelo start) --env=production 파라미터를 주지않으면 development 환경으로 시작
 */
app.configure('production|development', 'connector', function(){
  app.set('connectorConfig',
    {
      connector : pomelo.connectors.hybridconnector,
      heartbeat : 3,
      useDict : true,
      useProtobuf : true
    });
});

// start app
app.start();

process.on('uncaughtException', function (err) {
  console.error(' Caught exception: ' + err.stack);
});
