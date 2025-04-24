//Fonksiyonlar

// Geleneksel fonksiyon tanımı
function topla(a, b) {
  return a + b;
}

// Arrow function (ES6)
const carp = (x, y) => x * y;

// Parametreye varsayılan değer verebiliriz
const selamla = (isim = "Ziyaretçi") => {
  console.log(`Merhaba, ${isim}!`);
};

//Diziler

const sayilar = [1, 2, 3, 4, 5];

sayilar.push(6);        // Diziye eleman ekleme
sayilar.pop();          // Diziden son elemanı çıkarma

sayilar.forEach((sayi) => console.log(sayi)); // Her bir elemanı yazdır

// Yeni bir dizi oluşturmak
const kareler = sayilar.map((s) => s * s);  // Tüm elemanların karesi
Objeler

const kisi = {
  ad: "Ali",
  soyad: "Yılmaz",
  yas: 30,
  tamAd: function() {
    return `${this.ad} ${this.soyad}`;
  }
};

console.log(kisi.tamAd());  // "Ali Yılmaz"

//Koşullar

const not = 85;

if (not >= 90) {
  console.log("A");
} else if (not >= 80) {
  console.log("B");
} else {
  console.log("C");
}

// Ternary operator
const mesaj = not >= 60 ? "Geçti" : "Kaldı";
Döngüler

for (let i = 0; i < 5; i++) {
  console.log("Sayı: ", i);
}

let i = 0;
while (i < 3) {
  console.log("While döngüsü:", i);
  i++;
}

//DOM Manipülasyonu

// HTML: <button id="btn">Tıkla</button>
const buton = document.getElementById("btn");

buton.addEventListener("click", () => {
  alert("Butona tıklandı!");
});

//ES6 Özellikleri

// Destructuring
const araba = { marka: "Toyota", model: "Corolla", yil: 2020 };
const { marka, model } = araba;

// Spread operator
const dizi1 = [1, 2, 3];
const dizi2 = [...dizi1, 4, 5];  // [1, 2, 3, 4, 5]

// Template literals
const ad = "Zeynep";
console.log(`Merhaba ${ad}, hoş geldin!`);