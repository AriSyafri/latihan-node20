const validator = require('validator');
const chalk = require('chalk');

// coba validator
// console.log (validator.isEmail('ari@gmail.com'));
// console.log(validator.isMobilePhone('0821152010', 'id-ID'));
// console.log(validator.isNumeric('344'));


console.log(chalk.blue('Hello world!'));

console.log(chalk.blue('Hello') + chalk.black(' World') + chalk.red('!'));

const pesan = 'hello world';
console.log(chalk.bgWhite.green(pesan));

const nama = 'ari';

const pesan2 = chalk`Lorem nama saya hehe {bgBlue.bold ${nama}} ipsum dolor {bgRed.black sit amet} consectueur papipu {bgGreen.italic.black papale} jdongajah hfhai`;
console.log(pesan2);

