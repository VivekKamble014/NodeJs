//Creating_file.js

const fs = require('fs');

// path module

const path= require('path');

const dirpath= path.join(__dirname,'files'); // decelaring file path
for(i=0; i<5;i++){
    fs.writeFileSync(dirpath+"/first"+i+".txt","first text file")
  //  fs.writeFileSync(`"first${i}.txt`,"first text file")
}
console.warn(dirpath);
fs.readdir(dirpath,(err,files)=>{
    //console.warn(files);
    files.forEach((item)=>{
        console.log(item);
    })
});// read file directory
