/*Desafio:
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
*/

let N = 13;
for ( let i = 1; i <= 50; i++) {
	if (i % N == 2) {
	  console.log(i);
	}
}