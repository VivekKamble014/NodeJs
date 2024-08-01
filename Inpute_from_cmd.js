//Inpute_from_cmd.js
//console.log(process); // it returns all files available in node js
 //console.log(process.argv);// arguments vector

 // to create file we need file system module 

 const fs=require('fs');

 const input= process.argv;
 //fs.writeFileSync(input[2],input[3]);// first inpute is file name and second is message
 if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]); // for adding file 
    // syntax to run node Inpute_from_cmd.js add b.txt 'message'
 }else if(input[2]=='remove'){
    fs.unlinkSync(input[3]); // for remove file 
 }else{
    console.log("invalid");
 }
 // steps to run
 //1 . node ./Inpute_from_cmd.js apple.txt 'this is fruit'
