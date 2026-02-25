// const express = require('express');
// const app = express();
// const port=8000;

// app.get('/',(req,res)=>{
//     res.send(
//         `<h1>Welcome to Home Page</h1>
//         <img src="https://www.abesit.edu.in/wp-content/uploads/2021/05/ABES-IT-Logo.png" alt="ABESIT Logo" >  `
//     );
// });

// app.get('/about',(req,res)=>{
//     res.send('we are student of ABES');
// });

// app.listen(port,()=>{
//     console.log(`server is running on port ${port}`);
// });

//server.js

// const express = require('express');
// const multer = require('multer');
// const app = express();
// const port = 3000;
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage });
// app.post('/upload', upload.single('file'), (req, res) => {
//     res.send('File uploaded successfully');
// });
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//create database
const students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Doe', age: 22 },
    { id: 3, name: 'Jim Doe', age: 21 }
];

app.get('/students', (req, res) => {
    res.json(students);
});
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('Student not found');
    res.json(student);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});