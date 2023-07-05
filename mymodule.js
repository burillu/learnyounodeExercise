const fs = require('fs');
const path = require('path');

// module.exports = function callback (err, data) {
//   if (err) {
//     console.error(err);
//   }
//   data.forEach((file) => {
//     if (path.extname(file) === exten) {
//       console.log(file);
//     }
//   });
// }
module.exports = (dir, exten, callback) => {
  fs.readdir(dir, 'utf-8', (err, data) => {
    if (err) return callback(err);
    data.forEach((file) => {
      if (path.extname(file) === `.${exten}`) {
        console.log(file);
      } callback(null, data);
    });
  });
};



// function bar (callback) {  
//     foo(function (err, data) {  
//       if (err) { return callback(err) } // early return  
    
//       // ... no error, continue doing cool things with `data`  
    
//       // all went well, call callback with `null` for the error argument  
    
//       callback(null, data)  
//     })  
//   }
