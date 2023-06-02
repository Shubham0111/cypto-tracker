const fs=require('fs'); // fs is imp as it is is used to manage files in node


// fs.readFile as name suggests reads the file  accepts two arguments first the file location and callback function which has err and dat as parameters
// imp: this is asynchronous 
fs.readFile('./blog.txt',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    console.log(data.toString());
});

setTimeout(()=>{
     console.log('shubham');
},1000)

console.log('llllll');

// is used to read the files it accepts 3 arguments the file location what text we want to add and callback function
fs.writeFile('./blog.txt','hello world',function abc(){
    console.log('file was written');
});


// directories accepts two arguments first location and name of folder we have to create and callback function
if(!fs.existsSync('./assets')){
fs.mkdir('./assets',function (err){
    if(err)
    {
        console.log(err);
    }
    console.log('folder created');
})
}
// use rmdir to delete folder

// deleting files
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt',(err)=>{
        console.log(err);
    })
    console.log('file deleted successfully')
}