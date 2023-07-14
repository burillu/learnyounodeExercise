const http = require('node:http');
const file_stream = require ('fs');

let url = process.argv[2];
let data_resp = http.get(url, callback);

function callback(response) {
  response.setEncoding('utf8');
  response.on('data', (data) => console.log(data));
  response.on('error', console.error);
}
//questo da il risultato del buffer
//console.log(data_resp);


// questo da il risultato dello stream, forse
// bisogna richiamare il response.on sull' oggetto