const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const { body, validationResult, check } = require('express-validator');
const methodOverride = require('method-override');

const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');


const app = express();
const port = 3000;

// setup method override
app.use(methodOverride('_method'));



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

// halaman form tambah data contact
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: 'Form tambah data contact',
        layout: 'layouts/main-layout',
    });
});


// proses data contact
app.post('/contact', [
    body('nama').custom( async (value) => {
        const duplikat = await Contact.findOne({ nama: value });
        if(duplikat) {
            throw new Error('Nama contact sudah digunakan');
        }
        return true;
    }),
    check('email', 'Email tidak valid').isEmail(),
    check('nohp', 'No hp tidak valid').isMobilePhone('id-ID'),

], async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render('add-contact', {
            title: 'Form Tambah Data Contact',
            layout: 'layouts/main-layout',
            errors: errors.array()
        })
    } else  {
        await Contact.insertMany(req.body);
        // kirim flash message
        req.flash('msg', 'Data Contact berhasil ditambahkan!')
        res.redirect('/contact');
    }
});

// proses delet contact
// app.get('/contact/delete/:nama', async (req, res) => {
//     const contact = await Contact.findOne({nama: req.params.nama});

//     // jika kontact tidak ada
//     if (!contact) {
//         res.status(404);
//         res.send('<h1>404</h1>');
//     } else {
//         Contact.deleteOne({_id: contact.id}).then((result) => {
//             req.flash('msg', 'Data contact berhasil dihapus');
//             res.redirect('/contact');
//         });
//     }
// });

app.delete('/contact', (req, res) => {
    // res.send(req.body);
    Contact.deleteOne({nama: req.body.nama }).then((result) => {
        req.flash('msg', 'Data contact berhasil dihapus');
        res.redirect('/contact');
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

