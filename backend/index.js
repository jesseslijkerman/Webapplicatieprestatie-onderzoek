const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/api/items', (req, res) => {
    setTimeout(() => {
        res.json([
            {id: 1, title: 'Product A', price: 10},
            {id: 2, title: 'Product B', price: 15},
            {id: 3, title: 'Product C', price: 20}
        ]);
    }, 300); // latency voor realistische SSR tests
});


app.listen(port, () => console.log(`Backend running on ${port}`));
