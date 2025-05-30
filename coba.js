

// syncronous
const getUserSync = (id) => {
    // let nama = '';
    // if (id === 1) {
    //     nama = 'Ari';
    // } else {
    //     nama = 'agus'
    // }

    const nama = id === 1 ? 'ari' : 'agus';

    return {id, nama}
};


const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World';
console.log(halo); 


// asyncronous
const nama = 'ari';
const umur = 23;

