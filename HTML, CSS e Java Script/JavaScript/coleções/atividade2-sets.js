const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos (arr) {
    const mySet = new Set(arr);

    return [...mySet];
    // spread [...mySet] para que os elementos do set se tornem os elementos do array;
}
console.log(valoresUnicos(meuArray));