// 1. setTimeout: Belirli bir süre sonra çalışan asenkron bir işlemdir
console.log("1. Başlıyor");
setTimeout(() => {
  console.log("2. 2 saniye sonra çalıştı (setTimeout)");
}, 2000);
console.log("3. Bitti (setTimeout beklenmeden çalışır)");


// 2. Promise: Gelecekte tamamlanacak (resolve/reject) bir işlemi temsil eder
function fetchData(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Veri başarıyla alındı.");
      } else {
        reject("Veri alınamadı.");
      }
    }, 1500);
  });
}

fetchData()
  .then(data => console.log("4. then:", data))
  .catch(err => console.log("5. catch:", err));


// 3. async/await: Promise tabanlı işlemleri daha okunabilir hale getirir
async function getData() {
  try {
    console.log("6. Veri çekiliyor...");
    const result = await fetchData(); // fetchData bir Promise döndürür
    console.log("7. await sonucu:", result);
  } catch (error) {
    console.log("8. Hata yakalandı:", error);
  }
}

getData();


// 4. Promise.all: Tüm promise'leri paralel çalıştırır, hepsi başarılı olursa devam eder
const p1 = fetchData(true);
const p2 = fetchData(true);

Promise.all([p1, p2])
  .then(results => console.log("9. Promise.all sonuçları:", results))
  .catch(err => console.log("10. Promise.all hatası:", err));


// 5. Promise.race: İlk tamamlanan Promise sonucu verir
Promise.race([p1, p2])
  .then(result => console.log("11. Promise.race sonucu:", result))
  .catch(err => console.log("12. Promise.race hatası:", err));
