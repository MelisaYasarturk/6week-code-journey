# localStorage in JavaScript - Notes

## 🧠 Purpose
This document explains how to use the `localStorage` API in JavaScript to store data persistently in the browser. Data saved in `localStorage` remains even after the page is reloaded or the browser is closed and reopened.

## 🔧 Basic Operations

### 1. Set Data
```javascript
localStorage.setItem('username', 'JohnDoe');
```
- Stores a string value `'JohnDoe'` under the key `'username'`.

### 2. Get Data
```javascript
const user = localStorage.getItem('username');
console.log(user); // Outputs: JohnDoe
```
- Retrieves the value associated with the key `'username'`.

### 3. Remove Data
```javascript
localStorage.removeItem('username');
```
- Deletes the key `'username'` and its associated value.

### 4. Clear All Data
```javascript
localStorage.clear();
```
- Removes **all** keys and values stored in `localStorage`.

## 📦 Working with JSON Data

### Store an Array
```javascript
const todos = ['JavaScript çalış', 'Yüzmeye git', 'Kitap oku'];
localStorage.setItem('todos', JSON.stringify(todos));
```
- Converts the array into a JSON string before storing.

### Retrieve and Parse JSON
```javascript
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos); // ['JavaScript çalış', 'Yüzmeye git', 'Kitap oku']
```
- Parses the stored JSON string back into a JavaScript array.

## 💡 Notes
- Only strings can be stored in `localStorage`, so structured data like arrays or objects must be stringified with `JSON.stringify`.
- Always use `JSON.parse` when reading structured data back from storage.

## 🛠️ Use Cases
- Saving user preferences (e.g., theme settings)
- Caching todo lists or form inputs
- Offline data storage for simple apps
