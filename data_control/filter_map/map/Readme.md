# Week 1 - Day 1 (Part 2)

## 🧠 Problem: Inventory Transformation (map)

### 📋 Description

You are given a list of inventory items. Each item contains:

- `name` (string)
- `quantity` (number)
- `price` (number)

You will be provided with a filtered list of low stock items. Your task is to transform this data into a new format.

---

## 📦 Input

```js
const lowStock = [
  { name: "Apples", quantity: 5, price: 2 },
  { name: "Bananas", quantity: 3, price: 1 }
];
```

## 🎯 Requirements
1. Transform Each Item

Convert each item into the following structure:
```js
{
  label: "ItemName - LOW",
  totalValue: quantity * price
}
```

## Constraints
- Do not mutate the original lowStock array
- Do not use loops such as for or while
- Use the map() method



# Notes

- With MAP, always return a new object. do not mutate the original object. example would be i want a low stock alert. I dont want to change the original item object, i want to make a new object with same data and then change that and show it.  