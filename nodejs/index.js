const http=require('http');
const myserver=http.createServer((req,res)=>{
    console.log('server1');
    res.end('hello nodejs');
});
myserver.listen(8000,(req,res)=>{
    console.log('server is running on port 8000');
})