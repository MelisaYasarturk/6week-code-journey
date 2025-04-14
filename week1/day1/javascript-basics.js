// ALERT: Kullanıcıya uyarı mesajı gösterir
alert("Merhaba, JavaScript'e hoş geldin!");

// CONSOLE.LOG: Tarayıcı konsoluna veri yazdırmak için kullanılır
console.log("Bu bir console.log mesajıdır");

// DEĞİŞKEN TANIMLAMA: var, let, const kullanarak yapılır

var isim = "Ali"; // var ile tanımlama (eski yöntem)
let yas = 25; // let ile tanımlama (güncel ve önerilen)
const dogumYili = 1999; // const ile sabit değer tanımlama

// STRINGS: Karakter dizileri
let mesaj = "Merhaba JavaScript!";
console.log(mesaj);

// STRING METODLARI:
console.log(mesaj.length); // Uzunluk: 19
console.log(mesaj.toUpperCase()); // Büyük harf: "MERHABA JAVASCRIPT!"
console.log(mesaj.toLowerCase()); // Küçük harf: "merhaba javascript!"
console.log(mesaj.includes("Java")); // true
console.log(mesaj.replace("Merhaba", "Selam")); // "Selam JavaScript!"

// NUMBERS: Sayılarla işlemler
let sayi1 = 10;
let sayi2 = 5;
let toplam = sayi1 + sayi2;
console.log("Toplam: ", toplam); // 15

// TEMPLATE STRINGS: ${} ile değişkenleri string'e göm
let ad = "Ahmet";
let soyad = "Yılmaz";
let yas2 = 30;
let bilgi = `Ad: ${ad}, Soyad: ${soyad}, Yaş: ${yas2}`;
console.log(bilgi);

// ARRAYS: Dizilerle veri tutma
let renkler = ["kırmızı", "yeşil", "mavi"];
console.log(renkler[0]); // "kırmızı"
renkler.push("sarı"); // sona eleman ekle
console.log(renkler.length); // 4

// NULL ve UNDEFINED

let bosDeger = null; // bilinçli olarak boş değer atanır
let tanimsizDeger; // undefined çünkü bir değer atanmadı

console.log(bosDeger); // null
console.log(tanimsizDeger); // undefined

// BOOLEAN VERİ TİPİ
let aktifMi = true;
let girisYaptiMi = false;

// VERİ TİPLERİNE GÖRE KARŞILAŞTIRMA

// == sadece değere bakar (tip dönüşümü yapar)
console.log(5 == "5"); // true

// === hem değere hem de türe bakar (tavsiye edilir)
console.log(5 === "5"); // false

// != ve !== operatörleri
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

// DURUM KONTROLÜ (if-else örneği)
let not = 85;

if (not >= 90) {
  console.log("Notunuz: AA");
} else if (not >= 80) {
  console.log("Notunuz: BA");
} else {
  console.log("Notunuz: BB veya daha düşük");
}
