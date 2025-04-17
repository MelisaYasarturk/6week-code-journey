// ============================================
// 🧠 JavaScript Fonksiyonlar - Kullanışlı Örneklerle
// ============================================

// 🔹 1. Function Declaration: Kullanıcı Karşılama
function karsilamaMesaji(isim, saat) {
    if (saat < 12) {
      console.log(`Günaydın, ${isim}!`);
    } else if (saat < 18) {
      console.log(`İyi günler, ${isim}!`);
    } else {
      console.log(`İyi akşamlar, ${isim}!`);
    }
  }
  
  karsilamaMesaji("Ayşe", 10); // Günaydın, Ayşe!
  
  // 🔹 2. Function Expression: İndirimli Fiyat Hesaplama
  const indirimliFiyat = function (fiyat, oran = 0.1) {
    return fiyat - fiyat * oran;
  };
  
  console.log("İndirimli Fiyat:", indirimliFiyat(100)); // 90
  
  // 🔹 3. Arrow Function: KDV Hesaplama
  const kdvEkle = (tutar, oran = 0.2) => tutar + tutar * oran;
  
  console.log("KDV Dahil:", kdvEkle(150)); // 180
  
  // 🔹 4. Kullanıcı Adlarını Listeleme
  const yazdirKullanicilar = (kullanicilar) => {
    kullanicilar.forEach((kullanici, index) => {
      console.log(`${index + 1}. Kullanıcı: ${kullanici}`);
    });
  };
  
  const isimler = ["Ali", "Zeynep", "Can"];
  yazdirKullanicilar(isimler);
  
  // 🔹 5. Ortalama Not Hesaplama
  function ortalamaNot(notlar) {
    let toplam = 0;
    for (let not of notlar) {
      toplam += not;
    }
    return toplam / notlar.length;
  }
  
  const notlar = [70, 85, 90, 100];
  console.log("Ortalama:", ortalamaNot(notlar)); // 86.25
  
  // 🔹 6. Şifre Güçlülüğü Kontrolü
  const sifreGecerliMi = (sifre) => {
    return sifre.length >= 8 && /[A-Z]/.test(sifre) && /\d/.test(sifre);
  };
  
  console.log("Şifre geçerli mi?", sifreGecerliMi("Test1234")); // true
  
  // 🔹 7. Mail Doğrulama
  function emailGecerliMi(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  console.log("E-mail geçerli mi?", emailGecerliMi("test@example.com")); // true
  
  // 🔹 8. Tekrar Eden Karakterleri Sayma
  function tekrarSayisiBul(metin, harf) {
    let sayac = 0;
    for (let karakter of metin) {
      if (karakter.toLowerCase() === harf.toLowerCase()) {
        sayac++;
      }
    }
    return sayac;
  }
  
  console.log("a harfi sayısı:", tekrarSayisiBul("Ankara", "a")); // 3
  
  // 🔹 9. Sayıyı Basamaklarına Ayırma
  const basamakAyir = (sayi) => sayi.toString().split("").map(Number);
  
  console.log(basamakAyir(12345)); // [1, 2, 3, 4, 5]
  
  // 🔹 10. Rastgele Şifre Üretici
  function rastgeleSifreUret(uzunluk = 8) {
    const karakterler = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let sifre = "";
    for (let i = 0; i < uzunluk; i++) {
      const rastgeleIndex = Math.floor(Math.random() * karakterler.length);
      sifre += karakterler[rastgeleIndex];
    }
    return sifre;
  }
  
  console.log("Yeni şifre:", rastgeleSifreUret(10)); // Örnek: G4b9XzQ1Lk
  