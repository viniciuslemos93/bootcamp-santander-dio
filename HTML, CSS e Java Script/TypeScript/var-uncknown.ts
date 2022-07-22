let uncknownValor: unknown;
uncknownValor = 8;
uncknownValor = true;
uncknownValor = 'vai sim';

let stringTeste2: string = 'agora vai';
stringTeste2 = uncknownValor

/*O uncknownValor pode ser que será utlizado as vezes, e até é uma boa prática usar ele, quando não se sabe o tipo de dado que virá. Só fazer os devidos tratamentos para alocar de maneira correta com o If.
*/
if (typeof uncknownValor === 'string') {
    stringTeste2 = uncknownValor;
}