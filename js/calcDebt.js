document.addEventListener('DOMContentLoaded', () => {
    function calcDebt() {
        const form = document.getElementById('form');
        const messageContainer = document.getElementById('message-container');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const calcFields = document.getElementsByClassName('calcField');
            const nameFields = document.getElementsByClassName('nameField');
            const debts = [];
            let error = false;

            messageContainer.innerHTML = '';

            for (let i = 0; i < calcFields.length; i++) {
                const value = calcFields[i].value;
                const name = nameFields[i].value.trim();
                const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, ''));

                if (name === '') {
                    error = true;
                    showMessage(`O campo de nome não pode estar vazio`, 'danger');
                }

                if (isNaN(numericValue) || numericValue <= 0) {
                    error = true;
                    showMessage(`Valores devem ser números positivos`, 'danger');
                } 
                
                if (isNaN(numericValue)) {
                    error = true;
                    showMessage(`O campo do valor não pode estar vazio`, 'danger');
                } else {
                    debts.push({ name, value: numericValue });
                }
            }

            if (debts.length > 0 && !error) {
                let maxDebt = debts[0];
                for (let i = 1; i < debts.length; i++) {
                    if (debts[i].value > maxDebt.value) {
                        maxDebt = debts[i];
                    }
                }
                showMessage(`Nome da dívida: ${maxDebt.name} - Maior valor: R$${maxDebt.value.toFixed(2)}`, 'success');
            } else if (debts.length === 0) {
                showMessage("Nenhum valor numérico válido encontrado.", 'warning');
            }
        });
    }

    function showMessage(message, type) {
        const messageContainer = document.getElementById('message-container');
        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;
        messageContainer.appendChild(alertDiv);
    }

    calcDebt();
});
