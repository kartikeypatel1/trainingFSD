const http=require('http');
const fs=require('fs');
const homePage=fs.readFileSync('abes.html');

const myserver=http.createServer((req,res)=>{
    res.statusCode=200;
    // res.setHeader('Content-Type','text/html');
    // res.end('hello world'); 
    res.end(homePage);
    // console.log("server1");
    // res.end("welcome to my server");
    // if(req.url=='/'){
    //     res.end(
    //         `<h1>Welcome to Home Page</h1>
    //         <img src="https://images.unsplash.com/photo-1769109003123-99c12ae4b23c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" alt="ABESIT Logo" >  `
    //     );
    // }
    // else if(req.url=='/about'){
    //     res.end('we are student of ABES');
    // }else if(req.url=='/contact'){
    //     res.end('1234567890');
    // }
    // else if(req.url=='/class'){
    //     res.end('IT-A');
    // }
    // else{
    //     res.end('404 page not found');
    // }
});
myserver.listen(8000,(req,res)=>{
    console.log('server is running on port 8000');
})






// const fs=require('fs');
// // fs.writeFileSync("./it-a.txt","we are student of  it-a class");
// // fs.writeFileSync("./ABES.txt","this is the file of the abes engineering college");
// const result=fs.readFileSync("./it-a.txt","utf-8");
// console.log(result);

// const fs=require('fs');
// fs.writeFile("./it-b.txt","we are student of  it-a class",()=>{});
// fs.readFile("./it-b.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }    else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./it-b.txt","and i am in 3rd year");

// fs.appendFile("./it-b.txt","now we append the more data using thr async",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("data is appended");
//     }});
// fs.appendFile("./it-b.txt","we added one more line using the async method",()=>{});
// fs.writeFileSync("./a1.txt","we are student of  it-a class");

// fs.cpSync("./a1.txt","./a2.txt");

// fs.unlinkSync("./a2.txt");


