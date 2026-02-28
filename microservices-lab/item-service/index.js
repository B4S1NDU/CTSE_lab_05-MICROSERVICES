const express = require('express');
const app = express();

app.use(express.json());
app.use(express.text());

let items = ["Book", "Laptop", "Phone"];

app.get('/items', (req, res) => {
    res.json(items);
});

app.post('/items', (req, res) => {
    // Handle both JSON objects containing a name field and plain text
    const item = req.body && req.body.name ? req.body.name : req.body;
    let finalItem = typeof item === 'string' ? item : JSON.stringify(item);
    items.push(finalItem);
    res.status(201).send("Item added: " + finalItem);
});

app.get('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= items.length) {
        return res.status(404).send();
    }
    res.json(items[id]);
});

app.listen(8081, () => {
    console.log('Item Service listening on port 8081');
});
