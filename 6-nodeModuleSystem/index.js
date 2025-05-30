//const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
//const moment = require('moment'); // third party module / npm module / node module

const coba = require('./coba');
console.log(
    coba.cetakNama('ari Syafri'), 
    coba.PI, 
    coba.mahasiswa.cetakMhs(), 
    new coba.Orang()
);