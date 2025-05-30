// core module

// file system
const fs = require('fs');

// menuliskan string ke file synchronous

// try {
//     fs.writeFileSync('data/test.txt', 'Hello world secara syncronous');
// } catch(e) {
//     console.log(e)
// }

// menuliskan string ke file asyncronous
// fs.writeFile('data/test.txt', 'Hello wordl asyc', (e) => {
//     console.log(e);
// });

//membaca isi file syncronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// console.log(data);

// membaca isi file async
// fs.readFile('data/test.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// readline
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question('masukkna nama anda : ', (nama) => {
//     console.log(`terimakasih ${nama}`);
//     rl.close();
// });


// jika ada 2 readline core module
// rl.question('masukkna nama anda : ', (nama) => {
//     rl.question('masukkna no hp anda : ', (noHp) => {
//         console.log(`nama anda :  ${nama}`);
//         console.log(`No anda :  ${noHp}`);
//         rl.close();
//     });
// });

// challenge
rl.question('masukkna nama anda : ', (nama) => {
    rl.question('masukkna no hp anda : ', (noHp) => {
        
        const contact = { nama, noHp};
        const file = fs.readFileSync('data/contacts.json', 'utf8');
        const contacts = JSON.parse(file);
        console.log(file);
        console.log(contacts);

        contacts.push(contact);

        console.log(contacts);

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));

        console.log('terimakasih sudah memasukkan data');
    
        rl.close();
    });
});


