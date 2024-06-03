function createDebt() {
    const button = document.getElementById('addDebt');
    const form = document.getElementById('form');

    button.addEventListener("click", () => {
        const divTop = document.createElement("div");
        divTop.className = 'row mb-3';

        const divMiddle = document.createElement("div");
        divMiddle.className = 'col';

        const inputTop = document.createElement("input");
        inputTop.type = 'text';
        inputTop.className = 'form-control';
        inputTop.placeholder = 'Nome da dívida';

        const divBottom = document.createElement("div");
        divBottom.className = 'col-md-3';

        const inputBottom = document.createElement("input");
        inputBottom.type = 'text';
        inputBottom.className = 'form-control';
        inputBottom.placeholder = 'Valor (Somente números)';

        const divLower = document.createElement("div");
        divLower.className = 'col-md-1';

        const removeButton = document.createElement("button");
        removeButton.type = 'button';
        removeButton.className = 'btn btn-danger';
        removeButton.textContent = 'Remover';
        removeButton.addEventListener('click', () => {
            form.removeChild(divTop);
        });

        divTop.appendChild(divMiddle);
        divMiddle.appendChild(inputTop);
        divTop.appendChild(divBottom);
        divBottom.appendChild(inputBottom);
        divTop.appendChild(divLower);
        divLower.appendChild(removeButton);

        form.insertBefore(divTop, button);
    });
}

createDebt();
