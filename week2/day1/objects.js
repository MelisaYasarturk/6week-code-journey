// Bir JavaScript nesnesi süslü parantezler {} kullanılarak tanımlanır.
let araba = {
    // Bu nesnenin özellikleri (property) var. Her biri anahtar (key) ve değer (value) çiftidir.
    marka: "Toyota",
    model: "Corolla",
    yil: 2020,
    
    // Fonksiyonlar nesne içinde "metot" olarak tanımlanabilir.
    calistir: function () {
      console.log("Araba çalıştı.");
    },
  
    // Kısa metot tanımı (ES6 ile gelen özellik)
    dur() {
      console.log("Araba durdu.");
    }
  };
  
  // Nesnenin özelliklerine nokta notasyonu ile erişebiliriz.
  console.log(araba.marka); // "Toyota"
  
  // Veya köşeli parantez kullanarak da erişebiliriz (özellikle değişkenle erişirken kullanılır).
  console.log(araba["model"]); // "Corolla"
  
  // Özellik eklemek:
  araba.renk = "Gri";
  console.log(araba.renk); // "Gri"
  
  // Özellik değiştirmek:
  araba.yil = 2022;
  
  // Özellik silmek:
  delete araba.renk;
  
  // Metotları çalıştırmak:
  araba.calistir(); // "Araba çalıştı."
  araba.dur();      // "Araba durdu."
  
  // Object.keys() → Tüm anahtarları (key) döner
  console.log(Object.keys(araba)); // ["marka", "model", "yil", "calistir", "dur"]
  
  // Object.values() → Tüm değerleri döner
  console.log(Object.values(araba));
  
  // for...in döngüsü ile nesnedeki tüm özellikleri dolaşabiliriz:
  for (let ozellik in araba) {
    console.log(ozellik + ": " + araba[ozellik]);
  }
  
  // Nesne içinde başka bir nesne olabilir (iç içe nesne)
  let kisi = {
    ad: "Ali",
    yas: 25,
    adres: {
      sehir: "İstanbul",
      postaKodu: 34000
    }
  };
  
  console.log(kisi.adres.sehir); // "İstanbul"
  