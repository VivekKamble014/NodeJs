//CRUD_operation.js
const fs= require('fs');
const path = require('path');
const dirpath= path.join(__dirname,'CRUD');
const filepath=`${dirpath}/crud.txt`;

fs.writeFileSync(filepath,'This file show crud operation');

// read file
// fs.readFile(filepath,'utf8',(err, item)=>{
//     console.log(item)
// })

// update file

// fs.appendFile(filepath,'and file name is crud.txt',(err)=>{
//     if(!err) console.log('file is updated')
// })

// rename file
// fs.rename(filepath,`${dirpath}/crud_updated.js`,(err)=>{
//     if(!err) console.log("file renamed")
// })

// delete file

//fs.unlinkSync(`${dirpath}/crud_updated.js`)