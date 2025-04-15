// GLOBAL DEĞİŞKEN
// Global değişkenler, tüm kod boyunca erişilebilen değişkenlerdir
var globalVar = "Ben globalim!";

function degiskenOrnegi() {
  // LOCAL DEĞİŞKEN
  // Sadece bu fonksiyon içinde geçerlidir
  let localVar = "Ben lokalim!";
  console.log(localVar);
}
degiskenOrnegi();
// console.log(localVar); // HATA verir çünkü localVar fonksiyon dışında tanımlı değil

// IF, ELSE, ELSE IF ÖRNEĞİ
let yas = 20;

if (yas < 18) {
  console.log("Reşit değilsin");
} else if (yas === 18) {
  console.log("Tam sınırdasın");
} else {
  console.log("Reşitsin");
}

// VE (&&), VEYA (||), DEĞİL (!) OPERATÖRLERİ
let sicaklik = 25;
let yagmurVarMi = false;

// VE operatörü (&&): Her iki koşul da doğruysa çalışır
if (sicaklik > 20 && yagmurVarMi === false) {
  console.log("Hava güzel, dışarı çıkabilirsin.");
}

// VEYA operatörü (||): En az bir koşul doğruysa çalışır
if (sicaklik > 30 || yagmurVarMi === true) {
  console.log("Hava ya çok sıcak ya da yağmurlu.");
}

// DEĞİL operatörü (!): Koşulun tersini alır
if (!yagmurVarMi) {
  console.log("Yağmur yağmıyor.");
}

// FOR DÖNGÜSÜ
// Belirli sayıda tekrar yapılacaksa kullanılır
for (let i = 0; i < 5; i++) {
  console.log("for döngüsü turu:", i);
}

// WHILE DÖNGÜSÜ
// Koşul doğru olduğu sürece çalışır
let sayac = 0;
while (sayac < 3) {
  console.log("while döngüsü turu:", sayac);
  sayac++;
}

// DO-WHILE DÖNGÜSÜ
// En az bir kere çalışır, sonra koşulu kontrol eder
let sayac2 = 0;
do {
  console.log("do-while döngüsü turu:", sayac2);
  sayac2++;
} while (sayac2 < 2);

// BREAK ve CONTINUE
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // döngüyü tamamen bitirir
  }
  console.log("break örneği:", i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // bu turu atlar, döngü devam eder
  }
  console.log("continue örneği:", i);
}

// SWITCH CASE ÖRNEĞİ
let gun = "Salı";

switch (gun) {
  case "Pazartesi":
    console.log("Haftanın ilk günü");
    break;
  case "Salı":
    console.log("Bugün Salı");
    break;
  case "Çarşamba":
    console.log("Hafta ortası");
    break;
  default:
    console.log("Diğer gün");
    break;
}

// DİZİ (Array) ve forEach Kullanımı
let meyveler = ["Elma", "Armut", "Muz", "Çilek", "Kiraz"];

meyveler.forEach(function(meyve, index) {
  console.log("Meyve " + (index + 1) + ": " + meyve);
});

// TERNARY OPERATOR ÖRNEĞİ
let sicaklik2 = 15;

// Ternary operator (koşullu ifade)
let havaDurumu = (sicaklik2 > 20) ? "Hava sıcak" : "Hava soğuk";
console.log(havaDurumu);  // "Hava soğuk" yazdırır çünkü sicaklik2 20'den küçük
