const items = [
    { name: "Apples", quantity: 5, price: 2 },
    { name: "Oranges", quantity: 12, price: 1.5 },
    { name: "Bananas", quantity: 3, price: 1 },
    { name: "Mangoes", quantity: 20, price: 3 }
];

const lowStock = items.filter(({quantity}) => quantity < 10);
const lowStockNameChange = lowStock.map((item) => ({label:item.name + '- Low',totalValue:item.price * item.quantity }));

console.log(lowStock);
console.log(lowStockNameChange);