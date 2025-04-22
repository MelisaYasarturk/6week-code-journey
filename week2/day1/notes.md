# JavaScript Object (Nesne) Notları

Bu notlar, JavaScript’te nesne (object) konusunu kısa ve açıklamalı örneklerle anlatır. Özellik (property), metot (method), erişim, düzenleme, silme, iç içe nesne ve yardımcı fonksiyonlar gibi temel kavramları kapsar.

---

## 📘 Nesne Nedir?

JavaScript’te nesneler, birden fazla veriyi ve işlemi bir arada tutmak için kullanılır. Her nesne, **anahtar-değer (key-value)** çiftlerinden oluşur. Nesneler, süslü parantez `{}` içinde tanımlanır.

---

## 🔹 Nesne Tanımı

```javascript
let araba = {
  marka: "Toyota",         // Özellik (property)
  model: "Corolla",
  yil: 2020,

  calistir: function () {  // Uzun metot tanımı (ES5)
    console.log("Araba çalıştı.");
  },

  dur() {                  // Kısa metot tanımı (ES6)
    console.log("Araba durdu.");
  }
};
```

---

## 🔹 Özelliklere Erişim

```javascript
console.log(araba.marka);        // "Toyota" — Nokta notasyonu
console.log(araba["model"]);     // "Corolla" — Köşeli parantez notasyonu
```

---

## 🔹 Özellik Ekleme, Değiştirme, Silme

```javascript
araba.renk = "Gri";       // Yeni özellik ekleme
araba.yil = 2022;         // Mevcut özelliği değiştirme
delete araba.renk;        // Özelliği silme
```

---

## 🔹 Metotları Kullanma

```javascript
araba.calistir();  // Konsola "Araba çalıştı." yazar
araba.dur();       // Konsola "Araba durdu." yazar
```

---

## 🔹 Object Yardımcı Fonksiyonlar

```javascript
console.log(Object.keys(araba));   // ['marka', 'model', 'yil', 'calistir', 'dur']
console.log(Object.values(araba)); // ['Toyota', 'Corolla', 2022, ƒ, ƒ]
```

---

## 🔹 for...in Döngüsü ile Nesne Üzerinde Dönme

```javascript
for (let ozellik in araba) {
  console.log(ozellik + ": " + araba[ozellik]);
}
```

---

## 🔹 İç İçe (Nested) Nesne

```javascript
let kisi = {
  ad: "Ayşe",
  yas: 25,
  adres: {
    sehir: "Ankara",
    postaKodu: 06000
  }
};

console.log(kisi.adres.sehir); // "Ankara"
```

---

## 🎯 Özet

- Nesneler, birden fazla ilgili veriyi tek yapıda tutar.
- Özelliklere erişmek için nokta (`.`) veya köşeli parantez (`[]`) kullanılır.
- Nesnelere sonradan özellik eklenebilir veya silinebilir.
- Fonksiyonlar, nesne içerisinde metot olarak tanımlanabilir.
- `Object.keys()` ve `Object.values()` gibi yardımcı fonksiyonlarla nesne içerikleri alınabilir.
- `for...in` döngüsü ile tüm özellikler üzerinde dönülebilir.
- Nesneler başka nesneleri içerebilir (iç içe yapı).

---

**Not:** Bu döküman, JavaScript nesne yapısını temel seviyede öğrenmek isteyenler için hazırlanmıştır.  
İyi çalışmalar! 🚀
