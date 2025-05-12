// OOP'nin temel prensiplerini kullanarak bir Todo uygulama yapısı oluşturuyoruz

// Todo sınıfı (Class): Bir todo'nun temel özelliklerini ve işlemlerini tanımlar
class Todo {
  constructor(title) {
    this.title = title;
    this.completed = false; // Varsayılan olarak tamamlanmamış
  }

  // Todo'yu tamamlandı olarak işaretle
  markAsCompleted() {
    this.completed = true;
  }

  // Todo bilgilerini string olarak döndür
  toString() {
    return `${this.title} - ${this.completed ? "Done" : "Pending"}`;
  }
}

// TodoList sınıfı: Birden fazla todo'yu yönetir
class TodoList {
  constructor() {
    this.todos = []; // Boş bir todo dizisiyle başlar
  }

  // Yeni bir todo ekle
  addTodo(title) {
    const todo = new Todo(title);
    this.todos.push(todo);
  }

  // Belirli bir index'teki todo'yu tamamla
  completeTodo(index) {
    if (this.todos[index]) {
      this.todos[index].markAsCompleted();
    }
  }

  // Tüm todo'ları konsola yazdır
  showTodos() {
    this.todos.forEach((todo, index) => {
      console.log(`${index + 1}. ${todo.toString()}`);
    });
  }
}

// Kullanım örneği:
const myList = new TodoList();

myList.addTodo("JavaScript öğren");
myList.addTodo("React projesi yap");
myList.addTodo("Yürüyüşe çık");

myList.completeTodo(1); // İkinci todo'yu tamamla

myList.showTodos(); // Tüm todo'ları göster
