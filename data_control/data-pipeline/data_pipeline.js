const items = [
    { name: "Apples", quantity: 5, price: 2 },
    { name: "Oranges", quantity: 12, price: 1.5 },
    { name: "Bananas", quantity: 3, price: 1 },
    { name: "Mangoes", quantity: 20, price: 3 }
];


const lowStockItems = items
    .filter(({quantity}) => quantity < 10)
    .map(({name, quantity, price}) => ({label:name + " - LOW", totalValue:quantity*price}))
    .reduce((total, item) => total + item.totalValue, 0);

console.log(lowStockItems);