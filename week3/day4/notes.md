# JavaScript Array Metotları Notları

## 1. filter()
- Dizi elemanlarını filtreler.
- Yalnızca koşulu sağlayan elemanlardan oluşan yeni bir dizi döner.
- Örnek: `numbers.filter(num => num % 2 === 0)` → `[2, 4, 6]`

## 2. map()
- Her elemanı dönüştürmek için kullanılır.
- Yeni bir dizi döner, orijinal dizi değişmez.
- Örnek: `numbers.map(num => num * num)` → `[1, 4, 9, 16, 25, 36]`

## 3. reduce()
- Diziyi tek bir değere indirger.
- Toplama, çarpma gibi işlemlerde kullanılır.
- Örnek: `numbers.reduce((acc, curr) => acc + curr, 0)` → `21`

## 4. find()
- Şarta uyan ilk elemanı döner.
- Eleman bulunamazsa `undefined` döner.
- Örnek: `numbers.find(num => num > 3)` → `4`

## 5. push()
- Diziye yeni eleman(lar) ekler (sondan).
- Yeni uzunluğu döner.
- Örnek: `numbers.push(7)` → `[1, 2, 3, 4, 5, 6, 7]`

## 6. pop()
- Dizinin son elemanını çıkarır ve döner.
- Orijinal dizi değişir.
- Örnek: `numbers.pop()` → `7`

## 7. findIndex()
- Şarta uyan ilk elemanın index'ini döner.
- Bulamazsa `-1` döner.
- Örnek: `numbers.findIndex(num => num === 4)` → `3`

## 8. reverse()
- Dizinin sırasını tersine çevirir.
- Orijinal dizi değişir.
- Örnek: `numbers.reverse()` → `[6, 5, 4, 3, 2, 1]`

---

**Not:** Bazı metotlar (`push`, `pop`, `reverse`) orijinal diziyi değiştirir. `map`, `filter`, `reduce` gibi metotlar ise yeni dizi döner.
