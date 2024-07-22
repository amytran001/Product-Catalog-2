// Define choices 
const choices = ["item1", "item2", "item3"];

const rules = {
    item1: { name: "Laptop", model: "Macbook Air", cost: 1400, quantity: 25 },
    item2: { name: "Smartphone", model: "iPhone 15", cost: 1399, quantity: 30 },
    item3: { name: "Headphones", model: "Airpods Pro", cost: 300, quantity: 15 }
};

document.querySelectorAll('.product').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.id;
        const product = rules[productName];
        const resultText = `Name: ${product.name}, Model: ${product.model}, Cost: $${product.cost.toFixed(2)}, Quantity: ${product.quantity}`;
        document.getElementById('product-details').innerText = resultText;
    });
});

function displayInitialProduct() {
    const initialProduct = rules.item1; // Display initial product (item1)
    const resultText = `Name: ${initialProduct.name}, Model: ${initialProduct.model}, Cost: $${initialProduct.cost.toFixed(2)}, Quantity: ${initialProduct.quantity}`;
    document.getElementById('product-details').innerText = resultText;
}

displayInitialProduct();
