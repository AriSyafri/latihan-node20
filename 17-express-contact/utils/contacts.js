
// file system
const fs = require('fs');

// membuat folder data jika belum ada
const dirPath = './data';
if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
};

// membuat file contacts.json jika belum ada
const dataPath = './data/contacts.json'; 
if(!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8');
};

// mengambil data di contact.json
const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf8');
    const contacts = JSON.parse(file);
    return contacts;
};

// cari kontak berdasarkan nama
const findContact = (nama) => {
    contacts = loadContact();
    const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());
    return contact;
};

// menuliskan / menimpa file contacts.json dengan kontak data yang baru
const saveContacts = (contacts) => {
    fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
};

// menambah data kontak baru
const addContact = (contact) => {
    const contacts = loadContact();
    contacts.push(contact);
    saveContacts(contacts);
}

// cek nama yang duplikat
const cekDuplikat = (nama) => {
    const contacts = loadContact();
    return contacts.find((contact) => contact.nama === nama)
}

// hapus contact
const deleteContact = (nama) => {
    const contacts = loadContact();
    const filteredContacts = contacts.filter((contact) => contact.nama !== nama);

    // console.log(filteredContacts);
    saveContacts(filteredContacts);
}


// mengubah contacts
const updateContacts = (contactBaru) => {
    const contacts = loadContact();
    // hilangkan contact lama yang sama dengan old nama
    const filteredContacts = contacts.filter((contact) => contact.nama !== contactBaru.oldNama);
    // console.log(filteredContacts, contactBaru);
    delete contactBaru.oldNama;
    filteredContacts.push(contactBaru);
    saveContacts(filteredContacts);
}

module.exports = { loadContact, findContact, addContact, cekDuplikat, deleteContact, updateContacts };