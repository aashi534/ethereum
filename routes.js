const routes=require('next-routes')();

routes
.add('/campaigns/:address','/campaigns/show')
.add('/campaigns/:address','/campaigns/show')
.add('/campaigns/:address/requests','/camapigns/requests/index');

module.exports=routes;


