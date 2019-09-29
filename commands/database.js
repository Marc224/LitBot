const fs = require('fs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: '95.217.65.243',
    port: '3306',
    user: 'u69_mILbA2e9g0',
    password: 'vk.@G+G570zyh^G5b7UDBSHa',
    database: 's69_litbot',
});
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });