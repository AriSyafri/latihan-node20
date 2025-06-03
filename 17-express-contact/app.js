
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { loadContact, findContact, addContact, cekDuplikat } = require('./utils/contacts');
const { body, validationResult, check } = require('express-validator');

const app = express();
const port = 3000;

// gunakan ejs
app.set('view engine', 'ejs');

// third party middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public')); 
app.use(express.urlencoded({ extended:true }));

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

app.get('/contact', (req, res) => {
    const contacts = loadContact();
    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'contact',
        contacts,
    });
});


// proses data contact
app.post('/contact', [
    body('nama').custom((value) => {
        const duplikat = cekDuplikat(value);
        if(duplikat) {
            throw new Error('Nama contact sudah digunakan');
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('noHp', 'No hp tidak valid').isMobilePhone('id-ID'),

], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        // return res.status(400).json({errors: errors.array()});
        res.render('add-contact', {
            title: 'Form tambah data contact',
            layout: 'layouts/main-layout',
            errors: errors.array(),
        });
    } else {
        addContact(req.body);
        res.redirect('/contact');
    }
});


// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form tambah data contact',
        layout: 'layouts/main-layout',
    });
});

// halaman detail contact
app.get('/contact/:nama', (req, res) => {
    const nama = req.params.nama;
    const contact = findContact(req.params.nama);
    res.render('detail', {
        title: 'Halaman Detail Contact',
        layout: 'layouts/main-layout',
        contact,
        nama,
    });

});


// middleware
app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


