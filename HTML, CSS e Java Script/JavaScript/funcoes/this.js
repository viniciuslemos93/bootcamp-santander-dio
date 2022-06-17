/*const pessoa = {
    nome: 'Vinicius',
};
const animal = {
    nome: 'Mítio',
};
function getSomething () {
    console.log (this.nome);
}

getSomething.call (pessoa);
//O médodo .call refere-se ao objeto que vc irá chamar.
*/
/*
const meuObj = {
    num1: 2,
    num2: 4,
};
function soma (a, b) {
    console.log (this.num1 + this.num2 + a + b);
}

soma.call (meuObj, 1, 5); //este 1 e 5 passado no parâmetro é a referência de a e b da função soma.

const pessoa = {
    nome: 'Vinicius',
};
const animal = {
    nome: 'Mítio',
};
function getSomething () {
    console.log (this.nome);
}

getSomething.apply (pessoa);
//O médodo .apply refere-se ao objeto que vc irá chamar.
*/
const meuObj = {
    num1: 2,
    num2: 4,
};
function soma (a, b) {
    console.log (this.num1 + this.num2 + a + b);
}

soma.apply (meuObj, [1, 5]); //Os argumentos enviados com o apply irão dentro de um array, esta é a diferenã do aplly para o call.