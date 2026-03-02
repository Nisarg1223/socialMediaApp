require('dotenv').config()
const dns = require('dns');
dns.setServers(["8.8.8.8","8.8.4.4"]);
dns.setDefaultResultOrder("ipv4first");

const Server = require('./src/App.js');
const connecttoDB = require('./src/config/Database.js')
connecttoDB()
Server.listen(3000,function(){
    console.log('Server is running on port 3000')
})