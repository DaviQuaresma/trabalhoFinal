document.addEventListener('DOMContentLoaded', () => {
    let currentChart = null;

    function calcDebt() {
        const form = document.getElementById('form');
        const messageContainer = document.getElementById('message-container');
        const budgetField = document.getElementById('budget');
        const debtChart = document.getElementById('debtChart');

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const calcFields = document.getElementsByClassName('calcField');
            const nameFields = document.getElementsByClassName('nameField');
            const debts = [];
            let error = false;

            messageContainer.innerHTML = '';

            const budgetValue = parseFloat(budgetField.value.replace(/[^0-9,-]+/g, '').replace(',', '.'));

            if (isNaN(budgetValue) || budgetValue <= 0) {
                error = true;
                showMessage('O orçamento deve ser um número positivo', 'danger');
            }

            for (let i = 0; i < calcFields.length; i++) {
                const value = calcFields[i].value;
                const name = nameFields[i].value.trim();
                const numericValue = parseFloat(value.replace(/[^0-9,-]+/g, '').replace(',', '.'));

                if (name === '') {
                    error = true;
                    showMessage('O campo de nome não pode estar vazio', 'danger');
                }

                if (isNaN(numericValue) || numericValue <= 0) {
                    error = true;
                    showMessage('Valores devem ser números positivos', 'danger');
                } else {
                    debts.push({ name, value: numericValue });
                }
            }

            if (!error) {
                let totalDebt = 0;
                let maxDebt = debts[0];

                for (const debt of debts) {
                    totalDebt += debt.value;
                    if (debt.value > maxDebt.value) {
                        maxDebt = debt;
                    }
                }

                showMessage(`O total das dívidas é R$${totalDebt.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'info');

                if (totalDebt > budgetValue) {
                    const exceededAmount = totalDebt - budgetValue;
                    showMessage(`O orçamento foi ultrapassado em R$${exceededAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}! A maior dívida é ${maxDebt.name} no valor de R$${maxDebt.value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 'danger');
                }

                const debtPercentages = debts.map(debt => ({
                    name: debt.name,
                    percentage: (debt.value / budgetValue) * 100
                }));

                const debtLabels = debtPercentages.map(debt => debt.name);
                const debtData = debtPercentages.map(debt => debt.percentage);

                const chartData = {
                    labels: debtLabels,
                    datasets: [{
                        label: 'Porcentagem do Orçamento',
                        data: debtData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                };

                const chartOptions = {
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem, data) {
                                let label = data.datasets[tooltipItem.datasetIndex].label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += tooltipItem.yLabel.toFixed(2);
                                label += '%';
                                return label;
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                };

                if (currentChart) {
                    currentChart.destroy();
                }

                currentChart = new Chart(debtChart, {
                    type: 'bar',
                    data: chartData,
                    options: chartOptions
                });

                showMessage('Gráfico atualizado com sucesso!', 'success');
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

    function addDebtField() {
        const form = document.getElementById('form');
        const addDebtButton = document.getElementById('addDebt');
        const newDebtRow = document.createElement('div');
        newDebtRow.className = 'row mb-3';

        newDebtRow.innerHTML = `
            <div class="col-7">
                <input type="text" class="form-control nameField" placeholder="Nome da dívida" aria-label="Nome da dívida">
            </div>
            <div class="col-3">
                <input type="text" class="form-control calcField" placeholder="Valor (Somente números)" aria-label="Valor">
            </div>
            <div class="col-2 d-flex align-items-center">
                <button type="button" class="btn btn-danger w-100">Remover</button>
            </div>
        `;

        form.insertBefore(newDebtRow, addDebtButton.parentNode);

        const removeButton = newDebtRow.querySelector('.btn-danger');
        removeButton.addEventListener('click', () => {
            newDebtRow.remove();
        });
    }

    document.getElementById('addDebt').addEventListener('click', addDebtField);

    calcDebt();
});
