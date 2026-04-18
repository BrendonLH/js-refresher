# Week 1 - Day 5

## 🧠 Problem: Inventory Dashboard Summary

### 📋 Description

You are building logic for an inventory dashboard.

You are given a list of inventory items. Each item contains:

* `name` (string)
* `quantity` (number)
* `price` (number)
* `category` (string)

Your task is to process this data and return a **summary object** that would be useful for a dashboard.

---

## 📦 Input

    const items = [
      { name: "Apples", quantity: 5, price: 2, category: "food" },
      { name: "Oranges", quantity: 12, price: 1.5, category: "food" },
      { name: "Bananas", quantity: 3, price: 1, category: "food" },
      { name: "Mangoes", quantity: 20, price: 3, category: "food" },
      { name: "Shampoo", quantity: 8, price: 5, category: "household" },
      { name: "Soap", quantity: 25, price: 2, category: "household" }
    ];

---

## 🎯 Requirements

1. Low Stock Items  

Identify items where:  
**quantity < 10**

---

2. Total Inventory Value  

Calculate the total value of all items:  
**quantity * price summed across all items**

---

3. Low Stock Value  

Calculate the total value of only low stock items.

---

4. Category Breakdown  

Return an object where each category contains its total value.

Example shape:

* `food`: total value of all food items  
* `household`: total value of all household items  

---

## 📤 Output

Return a single object like:

    {
      totalValue: number,
      lowStockValue: number,
      lowStockItems: [...],
      categories: {
        food: number,
        household: number
      }
    }

---

## 🧼 Clean Code Rules

* Use `filter`, `map`, and `reduce`
* Use destructuring where it improves readability
* Keep logic clear (you may break into steps if needed)
* Do NOT mutate the original array

---

## 🧠 Notes

* You are now combining everything you’ve learned
* Think in **steps**, not one giant chain
* This simulates real-world app logic

Example mindset:

    data → filter → map → reduce → build final object

---

## 😈 Goal

Build something that looks like:

> “This could power a real dashboard”

---

## ✅ Status

- [ ] Completed  
- [ ] Reviewed  
- [ ] Refactored  