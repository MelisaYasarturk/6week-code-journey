# JavaScript Tarih ve Saat (Date) İşlemleri

## 📅 Date Nesnesi Oluşturma

- `new Date()` → Şu anki tarih ve saat.
- `new Date('2000-05-01')` → Belirli bir tarihi belirtir.

## 📤 Tarih Bilgilerini Alma

- `getFullYear()` → Yılı döner (örneğin: 2025)
- `getMonth()` → Ayı döner (0: Ocak, 11: Aralık)
- `getDate()` → Ayın gününü döner (1–31)
- `getDay()` → Haftanın günü (0: Pazar, 6: Cumartesi)
- `getHours()`, `getMinutes()`, `getSeconds()` → Saat bileşenlerini verir.

## 🛠️ Tarih Ayarlama

- `setFullYear()`, `setMonth()`, `setDate()` → Tarih bileşenlerini günceller.
- Örn: `setMonth(11)` → Aralık

## 🔄 Tarih Farkı Hesaplama

- `date2 - date1` → Milisaniye cinsinden fark
- Gün hesabı:  
  ```js
  const days = diffMs / (1000 * 60 * 60 * 24)
