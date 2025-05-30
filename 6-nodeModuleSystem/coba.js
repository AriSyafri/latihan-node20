// function
function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}

// variabel
const PI = 3.14;

// object
const mahasiswa = {
    nama: 'Ari Syafri',
    umur: '23',
    cetakMhs() {
        return `halo nama saya ${this.nama} dan saya ${this.umur} tahun`;
    }
}

class Orang {
    constructor() {
        console.log('Object orang leah dibuat');
    }
}


// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

module.exports = {cetakNama, PI, mahasiswa, Orang};