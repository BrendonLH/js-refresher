# Week 1 - Day 3

## 🧠 Problem: Inventory Total Value

### 📋 Description

You are given a list of inventory items. Each item contains:

* `name` (string)
* `quantity` (number)
* `price` (number)

Your task is to calculate the total value of all inventory items.

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

1. Calculate Total Value  

Return a single number representing the total value of all items:

**quantity * price summed across all items**

---

## 🧼 Clean Code Rules

* Use `reduce`
* Use destructuring
* Keep it readable
* Do NOT mutate the original array

---

## 🧠 Notes

* `reduce` combines everything into one result
* It uses an **accumulator** (running total)
* Each step adds to the total

Example mindset:

    (total, item) => total + something