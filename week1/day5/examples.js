// ==============================
// 🔁 JavaScript Functions with Loops and Conditionals (NEW Examples)
// ==============================

// 🔸 1. Sepetteki ürünlerin toplam fiyatını hesapla (fiyatlar + indirim varsa uygula)
function toplamFiyatHesapla(urunler) {
    let toplam = 0;
  
    for (let urun of urunler) {
      // Eğer ürün indirimliyse, indirimli fiyatı uygula
      if (urun.indirimOrani) {
        toplam += urun.fiyat * (1 - urun.indirimOrani);
      } else {
        toplam += urun.fiyat;
      }
    }
  
    return toplam.toFixed(2); // virgülden sonra 2 basamak
  }
  
  const sepet = [
    { isim: "Kitap", fiyat: 100 },
    { isim: "Kalem", fiyat: 20, indirimOrani: 0.2 },
    { isim: "Defter", fiyat: 50, indirimOrani: 0.1 },
  ];
  
  console.log("Toplam:", toplamFiyatHesapla(sepet)); // Örn: "Toplam: 157.00"
  
  
  // 🔸 2. Kullanıcının yaşına göre kategori belirle
  function yasKategorisi(yas) {
    if (yas < 0) return "Geçersiz yaş";
    else if (yas < 13) return "Çocuk";
    else if (yas < 20) return "Genç";
    else if (yas < 60) return "Yetişkin";
    else return "Yaşlı";
  }
  
  console.log(yasKategorisi(15)); // "Genç"
  
  
  // 🔸 3. Kullanıcı listesinde admin var mı? (case-insensitive kontrol)
  function adminVarMi(kullanicilar) {
    for (let kullanici of kullanicilar) {
      if (kullanici.role.toLowerCase() === "admin") {
        return true; // Admin bulundu
      }
    }
    return false; // Admin yok
  }
  
  const userListesi = [
    { username: "mehmet", role: "user" },
    { username: "ayşe", role: "Admin" },
    { username: "veli", role: "guest" },
  ];
  
  console.log("Admin var mı:", adminVarMi(userListesi)); // true
  
  
  // 🔸 4. Verilen bir dizide negatif sayı var mı?
  function negatifSayiKontrol(dizi) {
    for (let sayi of dizi) {
      if (sayi < 0) {
        return "Negatif sayı bulundu!";
      }
    }
    return "Tüm sayılar pozitif.";
  }
  
  console.log(negatifSayiKontrol([4, 8, -2, 7])); // "Negatif sayı bulundu!"
  
  
  // 🔸 5. Kullanıcı giriş kontrolü (doğru kullanıcı adı + şifre)
  function girisKontrol(kullaniciAdi, sifre, veriTabani) {
    for (let kullanici of veriTabani) {
      if (
        kullanici.username === kullaniciAdi &&
        kullanici.password === sifre
      ) {
        return `Hoş geldin, ${kullanici.username}!`;
      }
    }
    return "Kullanıcı adı veya şifre hatalı.";
  }
  
  const db = [
    { username: "admin", password: "1234" },
    { username: "fatma", password: "abcd" },
  ];
  
  console.log(girisKontrol("fatma", "abcd", db)); // "Hoş geldin, fatma!"
  