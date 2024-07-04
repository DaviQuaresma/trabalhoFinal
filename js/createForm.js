document.addEventListener('DOMContentLoaded', () => {
  function createDebt() {
      const button = document.getElementById("addDebt");
      const form = document.getElementById("form");

      button.addEventListener("click", () => {
          const divTop = document.createElement("div");
          divTop.className = "row mb-3";

          const divMiddle = document.createElement("div");
          divMiddle.className = "col-7";

          const inputTop = document.createElement("input");
          inputTop.type = "text";
          inputTop.className = "form-control nameField";
          inputTop.placeholder = "Nome da dívida";

          const divBottom = document.createElement("div");
          divBottom.className = "col-3";

          const inputBottom = document.createElement("input");
          inputBottom.type = "text";
          inputBottom.className = "form-control calcField";
          inputBottom.placeholder = "Valor (Somente números)";

          const divLower = document.createElement("div");
          divLower.className = "col-2 d-flex align-items-center";

          const removeButton = document.createElement("button");
          removeButton.type = "button";
          removeButton.className = "btn btn-danger w-100";
          removeButton.textContent = "Remover";
          removeButton.addEventListener("click", () => {
              form.removeChild(divTop);
          });

          divTop.appendChild(divMiddle);
          divMiddle.appendChild(inputTop);
          divTop.appendChild(divBottom);
          divBottom.appendChild(inputBottom);
          divTop.appendChild(divLower);
          divLower.appendChild(removeButton);

          form.insertBefore(divTop, button.parentElement);
      });
  }

  createDebt();
});
