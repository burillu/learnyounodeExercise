const fs = require('fs');
const path = require('path');
const mymodule = require('./mymodule');

const dir = process.argv[2];
const exten = process.argv[3];
/* console.log(`${dir} 
 .${exten}`); */
mymodule(dir, exten, (err, data) => {
  if (err) return console.error(`Error + ${err}`);
  // for (let i = 0; i < data.length; i += 1) {
  //   console.log(data[i]);
  // }
});
