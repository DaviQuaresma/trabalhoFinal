function calcDebt() {
    const form = document.getElementById('form'); 

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const calcFields = document.getElementsByClassName('calcField');
        const nameFields = document.getElementsByClassName('nameField');

        const debts = [];

        for (let i = 0; i < calcFields.length; i++) {
            const value = calcFields[i].value;
            const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));
            if (!numericValue || null){
                alert(`Não podemos calcular campos vazios ou negativos, favor remover o campo vazio ou sem nome`)
            }else if (!isNaN(numericValue)) {
                debts.push({ name: nameFields[i].value, value: numericValue });
            }
        }

        console.log(debts);

        if (debts.length > 0) {
            let maxDebt = debts[0];
            for (let i = 1; i < debts.length; i++) {
                if (debts[i].value > maxDebt.value) {
                    maxDebt = debts[i];
                }
            }
            alert(`
            
            Nome da dívida: ${maxDebt.name}
            Maior valor: R$${maxDebt.value}
            
            `);
        } else {
            console.log("Nenhum valor numérico encontrado.");
        }
    });
}

calcDebt();