// let nome = "Larissa";
// let idade = 16;


const readlineSync = require('readline-sync');

let nome = readlineSync.question("Qual o seu nome? ");
let idade = readlineSync.question("Qual sua idade? ");
let veracidade;

veracidade = idade>=100? veracidade = false:true

if(veracidade === true){
    console.log(`meu nome é ${nome}, tenho ${idade} anos e essa informacao é ${veracidade} :)`);
}
else{
    console.log(`meu nome é ${nome}, tenho ${idade} anos e essa informacao é ${veracidade}, seu mentiroso!`);
}



