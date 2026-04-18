# Week 1 - Day 4

## 🧠 Problem: Low Stock Inventory Value

### 📋 Description

You are given a list of inventory items. Each item contains:

* `name` (string)
* `quantity` (number)
* `price` (number)

Your task is to calculate the total value of all **low stock items only**.

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

Convert each item into its total value:  
**quantity * price**

3. Combine Data  

Return a single number representing the total value of all low stock items.

---

## 🧼 Clean Code Rules

* Use `filter`, `map`, and `reduce`
* Use destructuring
* Keep each step clear and readable
* Do NOT mutate the original array

---

## 🧠 Notes

* `filter` decides what stays  
* `map` decides what it becomes  
* `reduce` combines everything  

Example mindset:

    items → filter → map → reduce → final result