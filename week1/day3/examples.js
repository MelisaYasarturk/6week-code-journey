// ========================================
// 🧾 1. KOŞULLU İFADE: Kullanıcı Girişi Kontrolü
// ========================================

let kullaniciAdi = "admin";
let sifre = "1234";

if (kullaniciAdi === "admin" && sifre === "1234") {
  console.log("Giriş başarılı. Hoş geldiniz!");
} else {
  console.log("Hatalı kullanıcı adı veya şifre!");
}

// ========================================
// 🧮 2. KOŞULLU İFADE: Not Hesaplama
// ========================================

let not = 85;

if (not >= 90) {
  console.log("Harf Notu: AA");
} else if (not >= 80) {
  console.log("Harf Notu: BA");
} else if (not >= 70) {
  console.log("Harf Notu: BB");
} else if (not >= 60) {
  console.log("Harf Notu: CB");
} else {
  console.log("Dersi geçemediniz.");
}

// ========================================
// 📆 3. SWITCH: Günün Adına Göre Mesaj Ver
// ========================================

let gun = new Date().getDay(); // 0: Pazar, 1: Pazartesi, ...

switch (gun) {
  case 0:
    console.log("Bugün Pazar. Dinlenme günü!");
    break;
  case 1:
    console.log("Pazartesi sendromu...");
    break;
  case 5:
    console.log("Cuma! Hafta sonu yaklaştı!");
    break;
  case 6:
    console.log("Cumartesi! Tatilin tadını çıkar!");
    break;
  default:
    console.log("Haftaiçi, çalışmaya devam!");
}

// ========================================
// 🔁 4. FOR DÖNGÜSÜ: Sepetteki Ürünleri Listele
// ========================================

let sepet = ["Ekmek", "Süt", "Yumurta", "Peynir"];

console.log("Sepetinizdeki ürünler:");
for (let i = 0; i < sepet.length; i++) {
  console.log("- " + sepet[i]);
}

// ========================================
// 💸 5. FOR...OF: Ürün Fiyatlarının Toplamını Hesapla
// ========================================

let fiyatlar = [10, 25, 15, 40];
let toplam = 0;

for (let fiyat of fiyatlar) {
  toplam += fiyat;
}

console.log("Toplam tutar: " + toplam + " TL");

// ========================================
// 📊 6. FOR...IN: Kullanıcı Bilgilerini Yazdır
// ========================================

let kullanici = {
  ad: "Zeynep",
  soyad: "Kaya",
  sehir: "Ankara"
};

console.log("Kullanıcı Bilgileri:");
for (let bilgi in kullanici) {
  console.log(bilgi + ": " + kullanici[bilgi]);
}