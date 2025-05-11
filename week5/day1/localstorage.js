// localStorage, tarayıcıda kalıcı veri saklamak için kullanılır (veriler sayfa yenilense bile kaybolmaz)

// ------------------------------
// 1. Veri Ekleme (Set)
// ------------------------------
localStorage.setItem('username', 'JohnDoe'); 
// 'username' anahtarıyla 'JohnDoe' verisini saklar

// ------------------------------
// 2. Veri Okuma (Get)
// ------------------------------
const user = localStorage.getItem('username'); 
console.log(user); // Ekrana 'JohnDoe' yazar

// ------------------------------
// 3. Veri Silme (Remove)
// ------------------------------
localStorage.removeItem('username'); 
// 'username' anahtarıyla saklanan veriyi siler

// ------------------------------
// 4. Tüm Verileri Temizleme
// ------------------------------
localStorage.clear(); 
// localStorage'daki tüm anahtar-değer çiftlerini siler

// ------------------------------
// 5. JSON Veri Saklama ve Okuma
// ------------------------------
const todos = ['JavaScript çalış', 'Yüzmeye git', 'Kitap oku'];

// Diziyi JSON string'e çevirerek saklarız
localStorage.setItem('todos', JSON.stringify(todos));

// Saklanan JSON veriyi tekrar diziye çevirerek okuruz
const storedTodos = JSON.parse(localStorage.getItem('todos'));
console.log(storedTodos); // ['JavaScript çalış', 'Yüzmeye git', 'Kitap oku']
