# JavaScript Notları

## Değişken Tanımlama

```javascript
// let ve const ES6 ile geldi. var ise daha eski bir yöntemdir.
let isim = "Ahmet";       // Değiştirilebilir bir değişken
const yas = 25;           // Sabit bir değişken, sonradan değiştirilemez
var sehir = "İstanbul";   // Fonksiyon scope'unda geçerlidir
```

## Fonksiyonlar

```javascript
// Geleneksel fonksiyon tanımı
function topla(a, b) {
  return a + b;
}

// Arrow function (ES6 ile geldi)
const carp = (x, y) => x * y;

// Varsayılan parametre kullanımı
const selamla = (isim = "Ziyaretçi") => {
  console.log(`Merhaba, ${isim}!`);
};
```

## Diziler

```javascript
const sayilar = [1, 2, 3, 4, 5];

sayilar.push(6);        // Diziye eleman ekleme
sayilar.pop();          // Diziden son elemanı çıkarma

sayilar.forEach((sayi) => console.log(sayi)); // Her bir elemanı yazdırma

// map ile yeni bir dizi oluşturma
const kareler = sayilar.map((s) => s * s);  // Tüm elemanların karesi
```

## Objeler (Nesneler)

```javascript
const kisi = {
  ad: "Ali",
  soyad: "Yılmaz",
  yas: 30,
  tamAd: function() {
    return `${this.ad} ${this.soyad}`;
  }
};

console.log(kisi.tamAd());  // "Ali Yılmaz"
```

## Koşullar (if, else)

```javascript
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
```

## Döngüler (for, while)

```javascript
// for döngüsü
for (let i = 0; i < 5; i++) {
  console.log("Sayı: ", i);
}

// while döngüsü
let i = 0;
while (i < 3) {
  console.log("While döngüsü:", i);
  i++;
}
```

## DOM Manipülasyonu ve Event Listener

```javascript
// HTML: <button id="btn">Tıkla</button>
const buton = document.getElementById("btn");

buton.addEventListener("click", () => {
  alert("Butona tıklandı!");
});
```

## ES6 Özellikleri

```javascript
// Destructuring (Nesne veya diziden değişken ayırma)
const araba = { marka: "Toyota", model: "Corolla", yil: 2020 };
const { marka, model } = araba;

// Spread operator (dizi veya objeyi kopyalama/yayma)
const dizi1 = [1, 2, 3];
const dizi2 = [...dizi1, 4, 5];  // [1, 2, 3, 4, 5]

// Template literals (şablon dizeleri)
const ad = "Zeynep";
console.log(`Merhaba ${ad}, hoş geldin!`);
```
