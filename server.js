const fs=require('fs');
const http=require('http');
const _=require('lodash');
//sending html pages to browser
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method);
  res.setHeader('Content-Type','text/html');

  // adding navigation functionality using node.js
  let path='./';
  switch(req.url)
  {
    case '/':
        path +='index.html';
        res.statusCode=200;
        break;
    case '/about':
        path +='about.html'
        res.statusCode=200;
        break;
    case 'about-me':
        // redirects the code case
        res.statusCode=301;
        res.setHeader('Location','./about');
        res.end();
    default:
        path+='404.html';
        res.statusCode=404;
        break;
  }

   fs.readFile(path,(err,data)=>{
    if(err)
    {
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();
        // res.write('<p>hi</p>') this is sending html line by lin to browser
        }
   })
});
server.listen(3000,'localhost',()=>{
    console.log('listening ofr request on port 3000');
})
