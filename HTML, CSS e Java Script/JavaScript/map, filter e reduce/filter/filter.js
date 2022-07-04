function filtraPares(arr) {
    return arr.filter(callback);
}
function callback (item) {
    return item % 2 == 0;
    //Esta função retorna apenas os numero que divididos por 2 restam 0, os pares.
}
const meuArray = [1, 22, 4, 6, 8, 33];
console.log(filtraPares(meuArray));