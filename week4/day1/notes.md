# JavaScript Asynchronous Programming Notes

Asynchronous programming allows JavaScript to handle time-consuming operations (like network requests, timers, etc.) without blocking the main execution thread.

---

## ⏱️ setTimeout

- `setTimeout(callback, delay)` runs the callback after the specified delay (in milliseconds).
- It's non-blocking: the code after it continues executing.

```js
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

---

## 📦 Promises

- A Promise represents a value that may be available now, later, or never.
- It has 3 states: `pending`, `fulfilled`, `rejected`.

```js
const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve("Data received");
  } else {
    reject("Error occurred");
  }
});

promise
  .then(data => console.log(data))
  .catch(error => console.log(error));
```

---

## 🧠 async / await

- `async` functions return a Promise.
- `await` pauses the execution of the function until the Promise is resolved/rejected.

```js
async function getData() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

---

## 🧩 Promise.all

- Runs multiple Promises in parallel.
- Resolves when **all** Promises resolve.
- Rejects if **any** of them rejects.

```js
Promise.all([p1, p2])
  .then(results => console.log(results))
  .catch(error => console.error(error));
```

---

## ⚡ Promise.race

- Runs multiple Promises in parallel.
- Resolves/rejects with the result of the **first** Promise that completes.

```js
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.error(error));
```

---

## ✅ Summary Table

| Feature          | Description                              |
|------------------|------------------------------------------|
| `setTimeout`     | Runs code after a delay                  |
| `Promise`        | Represents future result of async op     |
| `async/await`    | Cleaner syntax for Promise handling      |
| `Promise.all`    | Waits for all Promises to finish         |
| `Promise.race`   | Returns result of the first settled one  |

Asynchronous programming is essential in JavaScript for handling time-based or external operations efficiently without blocking the main thread.
