# JavaScript Nesne (Object) Özeti

JavaScript'te nesneler, **anahtar-değer** çiftlerinden oluşan veri yapılarıdır. Nesneler, verileri ve fonksiyonları (metotları) bir arada tutar. Nesneler süslü parantez `{}` ile tanımlanır.

## Temel Kullanım
- Nesne tanımlama: `let car = { brand: "Toyota", model: "Corolla", year: 2020 };`
- Özelliklere erişim: `car.brand` veya `car["model"]`
- Metot tanımlama: `start: function() { console.log("Started"); }` veya `start() { console.log("Started"); }`
- Özellik ekleme, değiştirme, silme: `car.color = "Red";`, `car.year = 2021;`, `delete car.color;`
- İç içe nesneler: `let person = { name: "John", address: { city: "New York" } };`
- Döngü ile erişim: `for (let key in car) { console.log(car[key]); }`

Nesneler, JavaScript'te veri organize etmek ve yönetmek için temel bir araçtır.
