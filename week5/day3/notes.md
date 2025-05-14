# JavaScript OOP - Notes

## 🔍 Overview
Object-Oriented Programming (OOP) in JavaScript enables organizing code into reusable, modular, and logical structures using objects and classes.

---

## 🔧 Key Concepts Demonstrated

### 1. Class & Constructor
- `class Person` defines a blueprint for creating person objects.
- `constructor` initializes object properties like `name` and `age`.

### 2. Inheritance
- `class Student extends Person` allows Student to inherit properties and methods from Person.

### 3. Method Overriding
- Student class overrides the `greet()` method to provide its own implementation.

### 4. Polymorphism
- Both `Person` and `Student` objects can be treated the same (i.e., both have `greet()`), but behave differently.

### 5. Getters and Setters
- Used in the `Rectangle` class to encapsulate access to width and height.
- `get area()` computes area dynamically.
- `set width()` and `set height()` ensure values are valid.

---

## 💡 Why Use OOP in JavaScript?
- Better code organization and readability
- Reusability through inheritance
- Encapsulation and data protection
- Easier maintenance and scalability

---

## 🛠️ Potential Extensions
- Add private fields using `#` (e.g., `#name`)
- Use static methods or fields
- Combine with modules for large applications
- Integrate with frontend frameworks (e.g., React with classes)

---

## ✅ Summary
This example covered:
- Class creation
- Object instantiation
- Inheritance and polymorphism
- Getters and setters

These are the building blocks for OOP in modern JavaScript (ES6+).
