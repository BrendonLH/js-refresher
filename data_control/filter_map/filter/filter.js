const items = [
  { name: "Apples", quantity: 5, price: 2 },
  { name: "Oranges", quantity: 12, price: 1.5 },
  { name: "Bananas", quantity: 3, price: 1 },
  { name: "Mangoes", quantity: 20, price: 3 }
];

let lowStockItems = items.filter((item) => item.quantity < 10);
console.log(lowStockItems);