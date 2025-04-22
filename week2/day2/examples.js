// 1. Nesne Tanımlama
let car = {
    brand: "Toyota",           // Özellik (property)
    model: "Corolla",
    year: 2020,
    
    // 2. Metot (Function) Tanımlama
    start: function() {        
      console.log(`${this.brand} ${this.model} started.`);
    },
  
    stop() {                   // Kısa metot tanımı (ES6)
      console.log(`${this.brand} ${this.model} stopped.`);
    },
  
    // 3. İç içe Nesne (Nested Object)
    owner: {
      name: "John",
      age: 30,
      address: {
        city: "New York",
        country: "USA"
      }
    }
  };
  
  // 4. Nesne Özelliklerine Erişim
  console.log(car.brand);         // "Toyota"
  console.log(car["model"]);      // "Corolla"
  
  // 5. Nesne Metotlarını Kullanma
  car.start();  // "Toyota Corolla started."
  car.stop();   // "Toyota Corolla stopped."
  
  // 6. İç içe Nesnelerde Erişim
  console.log(car.owner.name);            // "John"
  console.log(car.owner.address.city);    // "New York"
  
  // 7. Özellik Ekleme ve Değiştirme
  car.color = "Red";         // Yeni özellik ekleme
  car.year = 2021;           // Mevcut özelliği değiştirme
  
  // 8. Özellik Silme
  delete car.color;          // Özelliği silme
  console.log(car);
  
  // 9. for...in Döngüsü ile Nesne Üzerinde Dönme
  for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }
  
  // 10. Object.keys() ve Object.values() Kullanımı
  console.log(Object.keys(car));     // ['brand', 'model', 'year', 'start', 'stop', 'owner']
  console.log(Object.values(car));   // ['Toyota', 'Corolla', 2021, ƒ, ƒ, {…}]
  