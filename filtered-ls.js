const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const exten = '.' + process.argv[3];

fs.readdir(dir, 'utf-8', afterRead);
function afterRead(err, data) {
  if (err) {
    console.error(err);
  }
  data.forEach(file => {
    if (path.extname(file) === exten) {
      console.log(file);
    }
  });
/*
  for (let i = 0; i < data.length; i + 1) {
    if (path.extname(data[i]) === exten) {
      console.log(data[i]);
    }
  }
*/
}
