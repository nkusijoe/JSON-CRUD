const express = require('express');

const app = express();


app.use(express.json());

app.use('/trainees',require('./routes/trainees'));
app.use('/trainers',require('./routes/trainers'));
app.use('/staffs',require('./routes/staffs'));

app.use("/", (res, req) => {
    req.send("Trainees API")
});

app.listen(3000,()=>{
    console.log('it works');
});