const items = [
  { name: "Apples", quantity: 5, price: 2 },
  { name: "Oranges", quantity: 12, price: 1.5 },
  { name: "Bananas", quantity: 3, price: 1 },
  { name: "Mangoes", quantity: 20, price: 3 }
];

const lowStockItems = items.filter((item) => item.quantity < 10);

let lowStockCheck = lowStockItems.map((item) => {
    let newItemObject = {
        name:item.name + " - " + "LOW",
        totalValue:item.quantity * item.price
    }
    return newItemObject

})

console.log(lowStockCheck);