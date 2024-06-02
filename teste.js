// Escreva uma função que receba uma string e retorne o número de caracteres dessa string. -- TIVE DIFICULDADE
// Crie uma função que receba um array de números e retorne a média deles. -- TIVE DIFICULDADE
// Crie uma função que receba um número e retorne o seu fatorial. -- TIVE DIFICULDADE
// Faça um programa que inverta uma string. -- REVER POIS TEM COISAS UTEIS NELE (SPLIT, REVERSE, JOIN)
// Escreva uma função que receba um array e retorne o maior número dele. -- REVER POIS TEM METODOS IMPORTANTES (Math.max(...arr);)
// Crie um programa que conte o número de vogais em uma string. -- CONSEGUI FAZER 90%, TENTAR DE NOVO (includes para verificar se algo está incluso no array)
// Escreva uma função que receba dois arrays e retorne um array com os elementos comuns entre eles. -- CONSEGUI FAZER 80%, TENTAR DE NOVO, (includes será bem usado)
// Crie uma função que receba um array de strings e retorne a string de maior comprimento.
// Escreva um programa que calcule a soma dos números de 1 a 100.
// Faça um programa que verifique se uma string é um palíndromo.
// Crie uma função que receba um array de números e retorne um array sem elementos duplicados.
// Escreva um programa que calcule a média de notas de uma turma.
// Crie uma função que receba uma string e a retorne em ordem inversa.
// Faça um programa que converta uma temperatura de Celsius para Fahrenheit.
// Escreva uma função que verifique se um número é primo.


function biggestString(){
    let strings = ["Davi","Quaresma","Da","Silva","Henriques"]

    let splitString = strings.sort()
    console.log(splitString)

    return splitString
}

biggestString()
