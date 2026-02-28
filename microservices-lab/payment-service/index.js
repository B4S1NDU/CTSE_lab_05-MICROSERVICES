const express = require('express');
const app = express();

app.use(express.json());

let payments = [];
let idCounter = 1;

app.get('/payments', (req, res) => {
    res.json(payments);
});

app.post('/payments/process', (req, res) => {
    const payment = req.body || {};
    payment.id = idCounter++;
    payment.status = "SUCCESS";
    payments.push(payment);
    res.status(201).json(payment);
});

app.get('/payments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const payment = payments.find(p => p.id === id);
    if (payment) {
        res.json(payment);
    } else {
        res.status(404).send();
    }
});

app.listen(8083, () => {
    console.log('Payment Service listening on port 8083');
});
