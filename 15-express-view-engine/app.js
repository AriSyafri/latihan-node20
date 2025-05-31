
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

app.use(expressLayouts);

app.get('/', (req, res) => {

    const mahasiswa = [
        {
            nama: 'Ari Syafri',
            email: 'ari@gmail.com',
        },
        {
            nama: 'Arip Sejati',
            email: 'arip@gmail.com',
        },
        {
            nama: 'Arik lukman',
            email: 'arik@gmail.com',
        }
    ];

    res.render('index', {
        layout: 'layouts/main-layout',
        nama: 'ari sjafri', 
        title: 'home',
        mahasiswa,
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'about'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'contact',
    });
});


app.get('/product/:id', (req,res) => {
    layout: 'layouts/main-layout',
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


