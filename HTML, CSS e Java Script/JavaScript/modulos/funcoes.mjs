function mostraIdade (nome, idade) {
    return `A idade de ${nome} eh ${idade}`;
}

function mostraCidade (nome, cidade) {
    return `A cidade de ${nome} eh ${cidade}`;
}

function mostraHobby (nome, hobby) {
    return `O hobby de ${nome} eh ${hobby}`;
}
/*EXPORT significa que a função presente neste arquivo, poderá ser utilizada através de outro arquivo, que neste caso será o arquivo main.mjs*/
export {mostraIdade, mostraCidade, mostraHobby};