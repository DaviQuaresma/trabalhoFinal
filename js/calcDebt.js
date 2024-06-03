function calcDebt(){
    const button = document.getElementById('calcDebt')

    button.addEventListener('click', () => {
        console.log("Clicado")
    })

}

// Esta função servira para calcular os valores de todas as contas que forem geradas, este botão já está em conexão com o botão do front, 
// preciso descobrircomo ele vai pegar os valores de cada campo e junta-los dentro de um Array, é bom ter uma regra para tirar qualquer 
// tipo de caracter que não for numero, apóes isso vc precisará fazer algo como se fosse um compare entre os valores dentro do Array, pode
// simplesmente fazer como eu mostrei ontem "array.sort().reverse()", trazendo para nós o maior valor do array, mas precisamos lembrar que ele
// tem que estar vinculado com um id por exemplo ou o nome do item que o cara colocou, para retornarmos o nome da conta mais alta dele. 
// Isso é só um exemplo, acho que tem mais coisas que eu posso fazer, mas se quiser ir adiantando algo, só mexer.


calcDebt()