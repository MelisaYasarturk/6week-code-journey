// 1. Yeni bir tarih nesnesi oluşturma (şu anki tarih ve saat)
const now = new Date();
console.log("Şu an:", now);

// 2. Belirli bir tarihle tarih nesnesi oluşturma
const birthday = new Date('2000-05-01');
console.log("Doğum günü:", birthday);

// 3. Yıl, ay, gün, saat, dakika, saniye gibi bilgileri alma
console.log("Yıl:", now.getFullYear());          // Örn: 2025
console.log("Ay:", now.getMonth());              // 0-11 arası (0: Ocak)
console.log("Gün:", now.getDate());              // Ayın günü
console.log("Gün (hafta):", now.getDay());       // 0-6 arası (0: Pazar)
console.log("Saat:", now.getHours());
console.log("Dakika:", now.getMinutes());
console.log("Saniye:", now.getSeconds());

// 4. Tarih bilgilerini değiştirme
const customDate = new Date();
customDate.setFullYear(2030);
customDate.setMonth(11);      // Aralık (0-11)
customDate.setDate(25);       // 25 Aralık 2030
console.log("Özel tarih:", customDate);

// 5. İki tarih arasındaki farkı hesaplama (milisaniye cinsinden)
const date1 = new Date('2025-05-01');
const date2 = new Date('2025-06-01');
const diffMs = date2 - date1; // milisaniye farkı
const diffDays = diffMs / (1000 * 60 * 60 * 24); // gün farkı
console.log("Tarihler arası fark (gün):", diffDays); // 31

// 6. ISO formatına veya yerel biçime çevirme
console.log("ISO formatı:", now.toISOString()); // 2025-05-01T...
console.log("Yerel tarih:", now.toLocaleDateString()); // Örn: 1.05.2025
console.log("Yerel saat:", now.toLocaleTimeString()); // Örn: 14:30:45

// 7. Şu anki zaman damgası (timestamp - milisaniye cinsinden)
console.log("Zaman damgası:", Date.now());

// 8. Tarihi karşılaştırma
const a = new Date('2025-01-01');
const b = new Date('2024-12-31');
console.log("a > b mi?", a > b); // true
