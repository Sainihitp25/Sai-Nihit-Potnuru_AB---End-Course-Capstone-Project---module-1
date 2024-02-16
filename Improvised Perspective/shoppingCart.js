function calculateTotal(cart) {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 },
  ];
console.log(calculateTotal(cart1));

const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 },
  ];

console.log(calculateTotal(cart2));
module.exports = { calculateTotal };