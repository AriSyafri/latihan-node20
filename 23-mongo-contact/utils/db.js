const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ngodom', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// membuat schema
const Contact = mongoose.model('Contact', {
    nama: {
        type: String,
        required: true,
    },
    nohp: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
});

// menambah 1 data
const contact1 = new Contact({
    nama: 'lukman',
    nohp: '098484884',
    email: 'ari@gmail.com',
});

// simpan ke collection
contact1.save().then((contact) => console.log(contact));