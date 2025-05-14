// JavaScript'te OOP: Class, Constructor, Inheritance, Method Override, Polymorphism

// 1. Sınıf (Class) ve Yapıcı Metot (Constructor) kullanımı
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Sınıf metodu
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // "Hello, my name is Alice and I'm 30 years old."

// 2. Kalıtım (Inheritance) - Başka bir sınıftan türetme
class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Person sınıfının constructor'ını çağır
    this.major = major;
  }

  // 3. Override (Metot Ezme) - greet metodunu kendi sınıfında değiştirme
  greet() {
    console.log(`Hi, I'm ${this.name}, a ${this.major} major.`);
  }

  study() {
    console.log(`${this.name} is studying ${this.major}.`);
  }
}

const student1 = new Student("Bob", 22, "Computer Engineering");
student1.greet();  // "Hi, I'm Bob, a Computer Engineering major."
student1.study();  // "Bob is studying Computer Engineering."

// 4. Polymorphism (Çok Biçimlilik)
// Hem Person hem Student sınıfı greet metoduna sahip, ama davranışları farklı
const people = [
  new Person("Charlie", 40),
  new Student("Diana", 21, "Math")
];

people.forEach(p => p.greet()); 
// "Hello, my name is Charlie and I'm 40 years old."
// "Hi, I'm Diana, a Math major."

// 5. Getter ve Setter örneği
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter
  get area() {
    return this._width * this._height;
  }

  // Setter
  set width(value) {
    if (value > 0) this._width = value;
  }

  set height(value) {
    if (value > 0) this._height = value;
  }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // 50
rect.width = 20;
console.log(rect.area); // 100
