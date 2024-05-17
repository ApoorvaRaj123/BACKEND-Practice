//Node JS basics
//Introduction to Node , working with modules
//File system operations
//HTTP module



//npm -->>npm packages are code that are uploaded by other people. We use these to perform various tasks in JS File.



//File system operations --> npm i fs

//writefile
//appendfile
//copyfile
//rename
//unlink


const fs = require('fs');


fs.writeFile("app.txt","hello app file",(err)=>{
    if(err) console.log(err);
    else console.log("done");
})