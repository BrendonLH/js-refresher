# Week 1 - Day 1

## 🧠 Problem: Inventory Processing

### 📋 Description

You are given a list of inventory items. Each item contains:

- `name` (string)
- `quantity` (number)
- `price` (number)

Your task is to process this data and return a new array based on specific conditions.

---

## 📦 Input

```js
const items = [
  { name: "Apples", quantity: 5, price: 2 },
  { name: "Oranges", quantity: 12, price: 1.5 },
  { name: "Bananas", quantity: 3, price: 1 },
  { name: "Mangoes", quantity: 20, price: 3 }
];

```
## 🎯 Requirements
1. Filter Items

Only include items where:

**quantity < 10**

# Notes
- Filter only needs to filter, no need for new objects creation as that would destory performance. Let Map creat the new objects.