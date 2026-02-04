// const http=require('http');
// const myserver=http.createServer((req,res)=>{
//     if(req.url=='/'){
//         res.end(
//             `<h1>Welcome to Home Page</h1>
//             <img src="https://images.unsplash.com/photo-1769109003123-99c12ae4b23c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="ABESIT Logo" >  `
//         );
//     }
//     else if(req.url=='/about'){
//         res.end('we are student of ABES');
//     }else if(req.url=='/contact'){
//         res.end('1234567890');
//     }
//     else if(req.url=='/class'){
//         res.end('IT-A');
//     }
//     else{
//         res.end('404 page not found');
//     }
// });
// myserver.listen(8000,(req,res)=>{
//     console.log('server is running on port 8000');
// })






const fs=require('fs');
// fs.writeFileSync("./it-a.txt","we are student of  it-a class");
fs.writeFileSync("./ABES.txt","this is the file of the abes engineering college")