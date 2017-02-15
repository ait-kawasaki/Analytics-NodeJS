#!/usr/local/bin/node

var cgi = require('./cgi.js');

cgi(function(query) {
    process.stdout.write('Content-Type: application/json; charset=UTF-8\r\n');
    process.stdout.write('\r\n');
    process.stdout.write(JSON.stringify(query) + '\n');
});