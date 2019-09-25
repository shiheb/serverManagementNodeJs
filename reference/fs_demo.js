const fs = require ('fs');
const path = require ('path');


// Create folder
// fs.mkdir(path.join(__dirname,'/test'), {},err => {
//     if (err) throw err;
//     console.log('Folder created...');

// });

// Create and write file

// fs.writeFile(path.join(__dirname,'/test','hello.txt'), 'Hello World!',err => {
//     if (err) throw err;
//     console.log('File created and written...');
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'), '\nI love Node.js',err => {
//         if (err) throw err;
//         console.log('File written...');
    
//     });
// });


fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
    
});
