const http = require('node:http');
const file_stream = require ('fs');
let string = '';

let url = process.argv[2];
let resp = http.get( url, callback);
function callback (response) {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    string += data;
  });
  response.on('end', (end) => {
    console.log(string.length);
    console.log(string);
  })
  response.on('error', console.error);
  // console.log(resp_enc);
}