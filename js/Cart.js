class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        const cartItem = this.items.find(cartItem => cartItem.item.id === item.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            this.items.push({ item: item, quantity: 1 });
        }
        this.updateCart();
    }

    removeItem(itemId) {
        const itemIndex = this.items.findIndex(cartItem => cartItem.item.id === itemId);
        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
        this.updateCart();
    }

    getTotalPrice() {
        return this.items.reduce((total, cartItem) => total + cartItem.item.price * cartItem.quantity, 0);
    }

    updateCart() {
        // Em desenvolvimento
        // Atualizar a interface do carrinho na tela
        console.log("Cart updated:", this.items);
    }
}

export default Cart;
