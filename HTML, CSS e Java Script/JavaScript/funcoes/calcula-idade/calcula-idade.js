function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}
const pessoa2 = {
    nome: 'Carla',
    idade: 26,
}
const animal = {
    nome: 'Mítio',
    idade: 3,
    raca: "Gato",
};

console.log(calculaIdade.call(animal, 3));
//console.log(calculaIdade.apply(animal, [3]));