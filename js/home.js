// Array para armazenar os itens do carrinho
let carrinho = [];

// Produtos definidos no JavaScript
const products = {
    ps5: {
        name: "PlayStation5",
        price: 3000,
        discount: 1890,
        productId: 1,
        quantity: 0
    },
    chocolate: {
        name: "Chocolate",
        price: 2.99,
        discount: 9.90,
        productId: 2,
        quantity: 0
    },
    remedio: {
        name: "Remédio",
        price: 10.00,
        discount: 29.90,
        productId: 3,
        quantity: 0
    }
};

// Função para atualizar o contador do carrinho
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = carrinho.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto) {
    const existingProduct = carrinho.find(item => item.productId === produto.productId);
    if (existingProduct) {
        existingProduct.quantity += produto.quantity;
    } else {
        carrinho.push({ ...produto });
    }
    updateCartCount();
    console.log(`Produto ${produto.name} adicionado ao carrinho`);
    console.log(carrinho);
}

// Função para ajustar a quantidade do produto
function setupProductEventListeners() {
    Object.keys(products).forEach(productId => {
        const productElement = document.getElementById(productId);
        const product = products[productId];
        const controlElement = document.getElementById(`${productId}-control`);
        const quantitySpan = controlElement.querySelector('.quantity');
        const decreaseButton = controlElement.querySelector('.decrease');
        const increaseButton = controlElement.querySelector('.increase');
        const confirmButton = controlElement.querySelector('.confirm');

        productElement.addEventListener('click', () => {
            controlElement.style.display = 'flex';
        });

        decreaseButton.addEventListener('click', () => {
            if (product.quantity > 0) {
                product.quantity -= 1;
                quantitySpan.textContent = product.quantity;
            }
        });

        increaseButton.addEventListener('click', () => {
            product.quantity += 1;
            quantitySpan.textContent = product.quantity;
        });

        confirmButton.addEventListener('click', () => {
            adicionarAoCarrinho(product);
            product.quantity = 0;
            quantitySpan.textContent = product.quantity;
            controlElement.style.display = 'none';
        });
    });
}

// Função para redirecionar para a página do carrinho
function NextPage() {
    const link1 = document.querySelector('#link1');
    link1.addEventListener('click', () => {
        window.location.href = 'pages/carrinho.html';
    });
}

// Inicializar os eventos
NextPage();
setupProductEventListeners();
