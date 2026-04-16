# Week 1 - Day 2

## 🧠 Problem: Clean Inventory Transformation

### 📋 Description

You are given a list of inventory items. Each item contains:

* `name` (string)
* `quantity` (number)
* `price` (number)

Your task is to process this data and return a new array based on specific conditions, while writing clean and readable JavaScript.

---

## 📦 Input

    const items = [
      { name: "Apples", quantity: 5, price: 2 },
      { name: "Oranges", quantity: 12, price: 1.5 },
      { name: "Bananas", quantity: 3, price: 1 },
      { name: "Mangoes", quantity: 20, price: 3 }
    ];

---

## 🎯 Requirements

1. Filter Items  

Only include items where:  
**quantity < 10**

2. Transform Data  

Return a new array where each item is transformed into:

* `label`: "ItemName - LOW"  
* `totalValue`: quantity * price  

---

## 🧼 Clean Code Rules

* Use `map` and `filter`
* Use **destructuring** in your function parameters
* Keep your code concise and readable
* Avoid unnecessary variables
* Do NOT mutate the original array

---

## 🧠 Notes

* `filter` decides **what stays**
* `map` decides **what it becomes**
* Destructuring replaces `item.name`, `item.quantity`, etc.

Example mindset:

    ({ name, quantity, price }) => ...