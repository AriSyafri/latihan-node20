const yargs = require('yargs');
// const { simpanContact, <fungsi lain> } = require('./contacts');
const contacts = require('./contacts');

yargs.command({
    command: 'add',
    describe: 'Menambahkan contact baru',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOptions: true,
            type: 'string',
        },
        email: {
            describe: 'Email',
            demandOptions: false,
            type: 'string',
        },
        noHp: {
            describe: 'No HP',
            demandOptions: true,
            type: 'string',

        },
    },

    handler(argv) {
        // const contact = {
        //     nama: argv.nama,
        //     email: argv.email,
        //     noHp: argv.noHp,
        // };

        // console.log(contact);
        
        contacts.simpanContact(argv.nama, argv.email, argv.noHp);
    },   
})
.demandCommand();


// menampilkan daftar semua nama dan no hp
yargs.command({
    command: 'list',
    describe: 'Menampilkan semua nama dan no hp contact',
    handler(){
        contacts.listContact();
    }, 
});

// menampilkan detail sebuah contact
yargs.command({
    command: 'detail',
    describe: 'Menampilkan sebuah detail contact berdasarkan nama',
    builder: {
        nama: {
            describe: 'Nama lengkap',
            demandOptions: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.detailContact(argv.nama);
    }, 
});

// menghapus contact berdasarkan nama
yargs.command({
    command: 'delete',
    describe: 'Menghapus contact berdasarkan nama',
    builder: {
        nama: {
            describe: '',
            demandOptions: true,
            type: 'string',
        },
    },
    handler(argv){
        contacts.deleteContact(argv.nama);
    }
});



yargs.parse();