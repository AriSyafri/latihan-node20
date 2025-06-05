
const { MongoClient } = require("mongodb");
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'ngodom';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if(error) {
        return console.log('koneksi gagal');
    }

    // console.log('koneksi berhasil');

    // menambah 1 data ke collection mahasiswa
    

    // pilih database
    const db = client.db(dbName);

    // menambahkan 1 data ke collection mahasiswa
    db.collection('mahasiswa').insertOne(
        {
            nama: 'Ari Rusdi',
            email: 'erik@gmail.com'
        },
        (error, result) => {
            if(error) {
                return console.log('gagal menambahkan data');
            }

            console.log(result);
        });
});
