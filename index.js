const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 2023; 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    var name = req.body.name;
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var BMI = weight / (height ** 2);
    var result = '';
    if (BMI < 18.5) {
        result = 'Underweight';
    } else if (BMI >= 18.5 && BMI < 25) {
        result = 'Normal weight';
    } else if (BMI >= 25 && BMI < 30) {
        result = 'Overweight';
    } else {
        result = 'Obese';
    }
    
    res.send(`Hello ${name}, your BMI is ${BMI.toFixed(2)}. You are ${result}.`);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});