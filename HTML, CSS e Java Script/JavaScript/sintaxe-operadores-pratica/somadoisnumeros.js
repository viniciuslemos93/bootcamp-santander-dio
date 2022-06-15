function comparaNumeros (n1, n2) {
    if (!n1 || !n2) return 'Defina dois números';
    const primeiraFrase = criaPrimeiraFrase (n1, n2);
    const segundaFrase = criaSegundaFrase (n1, n2);

    return `${primeiraFrase} ${segundaFrase}`
    
    /*const saoIguais = n1 === n2;
    const soma = n1 + n2;

    if (saoIguais) {
        return "São iguais";
    }
    return "Não são iguais" */
    /*Mesma comparação acima, usando if ternário:
    return saoIguais ? "São iguais." : "Não são iguais"
    */
}
function criaPrimeiraFrase (n1, n2) {
    let saoIguais = '';
    if (n1 !== n2) {        
        saoIguais = 'não';
    }
    return `Os números ${n1} e ${n2} ${saoIguais} são iguais`
}
function criaSegundaFrase (n1, n2) {
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10 
    const compara20 = soma > 20

    if (compara10) {
        resultado10 = 'maior';
    }
    if (compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros())


/*let totalSoma;

function validaNums (n1=0, n2=0) {
    if (n1 === n2) {
        console.log (`Os números ${n1} e ${n2} são iguais`);
    } else {
        console.log (`Os números ${n1} e ${n2} não são iguais`);
    }
    //return n1 + n2;
    totalSoma = n1 + n2;
    if (totalSoma > 10 && totSoma < 20) {
        console.log(`A soma dos números é ${totSoma}, que é maior que 10 e menor que 20.`)
    } else if (totalSoma > 20){
        console.log(`A soma dos números é ${totSoma}, que é maior que 10 e maior que 20`)
    }
}
console.log(validaNums(2, 2))
*/