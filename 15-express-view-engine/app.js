
const express = require('express');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index', {
        nama: 'ari sjafri', title: 'home',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'contact',
    });
});


app.get('/product/:id', (req,res) => {
    res.send(`Product ID: ${req.params.id} <br> Category ID : ${req.query.category}`);
})


// middleware
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


