# JavaScript OOP Example - Notes

## 🧠 Purpose
This example demonstrates Object-Oriented Programming (OOP) in JavaScript by simulating a simple Todo app using classes and methods.

## 📦 Structure

### `Todo` Class
- **Properties**:
  - `title`: The name of the todo.
  - `completed`: Boolean flag to check if it's done.
- **Methods**:
  - `markAsCompleted()`: Sets `completed` to `true`.
  - `toString()`: Returns a string representation of the todo item.

### `TodoList` Class
- **Properties**:
  - `todos`: Array of `Todo` objects.
- **Methods**:
  - `addTodo(title)`: Adds a new todo to the list.
  - `completeTodo(index)`: Marks a todo as completed by its index.
  - `showTodos()`: Logs all todos with their status.

## 💡 OOP Concepts Demonstrated
- **Encapsulation**: Each class manages its own data and behavior.
- **Abstraction**: Complex operations like marking complete are hidden inside methods.
- **Modularity**: Logic is split between `Todo` and `TodoList`.
- **Reusability**: The `Todo` class can be reused in different list implementations.

## 🛠️ Future Ideas
- Add `deleteTodo(index)` method.
- Integrate with localStorage for persistence.
- Add due dates or categories for todos.
