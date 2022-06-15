function verificaPalindromo (string) {
    if (!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
    /*
    - split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 
    - O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    - O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
    */
}
console.log(verificaPalindromo("ovo"));