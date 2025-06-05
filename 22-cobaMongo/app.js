
const { MongoClient, ObjectId } = require("mongodb");
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
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: 'Ari Rusdi',
    //         email: 'erik@gmail.com'
    //     },
    //     (error, result) => {
    //         if(error) {
    //             return console.log('gagal menambahkan data');
    //         }
    //         console.log(result);
    //     });

    // menambah lebih dari satu data
    // db.collection('mahasiswa').insertMany([
    //     {
    //         nama: 'eris',
    //         email: 'eris@gmail.com'
    //     },
    //     {
    //         nama: 'sylph',
    //         email: 'avip@gmail.com'
    //     },
    // ],
    // (error, result) => {
    //     if (error) {
    //         return console.log('data gagal ditambahkan');
    //     }
    //     console.log(result);
    // }
    // );

    // menampilkan data collection / tabel
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find()
    //     .toArray((error, result) => {
    //         console.log(result);
    //     })
    // );

    // menampilkan data berdasarkan kriteria
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     // .find({ nama: 'eris'})
    //     .find({ _id: ObjectId('6841d71df08627512836ee66') })
    //     .toArray((error, result) => {
    //         console.log(result);
    //     })
    // );

    // Mengubah data berdasarkan id    
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectId('6841d71df08627512836ee66'),
    //     },
    //     {
    //         $set: {
    //             nama: 'eris suerb',
    //         },
    //     }
    // );

    // updatePromise
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // mengubah data lebih dari satu bersarkan kriteria
    db.collection('mahasiswa').updateMany(
        {
            nama: 'ari klon',
        },
        {
            $set: {
                nama: 'osamu dazai',
            },
        }
    );

    // db.collection('mahasiswa').updateMany(
    //     { nama: 'ilham' },
    //     { $set: { nama: 'ari klon' } },
    //     (err, res) => {
    //         if (err) {
    //             console.error('Update gagal:', err);
    //         } else {
    //             console.log('Jumlah dokumen yang diupdate:', res.modifiedCount);
    //         }
    //     }
    // );
});

    

