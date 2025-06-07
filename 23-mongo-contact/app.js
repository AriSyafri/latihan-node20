const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');


const app = express();
const port = 3000;


// gunakan ejs
app.set('view engine', 'ejs');

// third party middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public')); 
app.use(express.urlencoded({ extended:true }));

// konfigurasi flash
app.use(cookieParser('secret'));

app.use(session({
        cookie: { maxAge: 6000},
        secret: 'secret',
        resave: true, 
        saveUninitialized: true,
    })
);
app.use(flash());


// halaman home
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
        title: 'about'}
    );
});

app.get('/contact', async (req, res) => {

    // Contact.find().then((contact) => {
    //     res.send(contact);
    // });

    const contacts = await Contact.find();

    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'contact',
        contacts,
        msg: req.flash('msg'),
    });
});


// halaman detail contact
app.get('/contact/:nama', async (req, res) => {
    
    const contact = await Contact.findOne({ nama: req.params.nama });

    res.render('detail', {
        title: 'Halaman Detail Contact',
        layout: 'layouts/main-layout',
        contact,
    });
});


app.listen(port, () => {
    console.log(`Mongo Contact App | listening at http://localhost:${port}`);
});

