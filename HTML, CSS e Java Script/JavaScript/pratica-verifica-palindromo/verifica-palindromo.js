/*Atividade 1
Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.
Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)
*/
function verificaPalindromo (string) {
    if (!string) return "String inexistente";

    return string.split("").reverse().join("") === string;
    /*
    - split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. 
    - O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.
    - O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
    */
}
//console.log(verificaPalindromo("ovo"));
function verificaPalindromo (string) {
    if (!string) return "String inexistente"
    
    for (let i = 0; i < string.length / 2; i++) { //length / 2 pois não precisamos percorrer toda a string, apenas a metade dela.
        if (string[i] !== string[string.length - 1 - i]) {/*Testando se a string na posição [i] não é igual ao total de caracteres da string - 1 - i
        // o índice inicia no 0, mas o length inicia no 1. Ex.:
        palavra: abba
        índice:  0123 -> .length vai ser 4
        Neste exemplo vai comparar o indice 0 se não é igual ao indice 3. Após o primeiro loop, comparará o índice 1 com o 2, e assim por diante.
        */

        return false; // Se a string não for igual, retorna falso.
        }
        
    }
    return true;// Se a string não for diferente, retorna true.    
}
console.log(verificaPalindromo("gato"));