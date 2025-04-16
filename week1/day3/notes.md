JavaScript Koşullu İfadeler ve Döngüler Notları

🧾 1. Kullanıcı Girişi Kontrolü (if-else)

Kullanıcının girdiği kullanıcı adı ve şifre kontrol edilir.
Doğruysa "Giriş başarılı" mesajı verilir, değilse hata mesajı gösterilir.

    if (kullaniciAdi === "admin" && sifre === "1234") {
    console.log("Giriş başarılı");
    } else {
    console.log("Hatalı kullanıcı adı veya şifre");
    }

🧮 2. Not Hesaplama (if-else if-else)

Girilen nota göre harf notu hesaplanır.
Bu yapı eğitim sistemlerinde yaygındır.

    if (not >= 90) {
    console.log("Harf Notu: AA");
    } else if (...) {
     ...
    }

📆 3. Gün Mesajı (switch-case)

new Date().getDay() fonksiyonu ile gün alınır.
Günün adına göre mesaj verilir.

    switch (gun) {
    case 0:
        console.log("Bugün Pazar");
        break;
    ...
    }

🔁 4. Sepetteki Ürünleri Listeleme (for)

Bir dizi içindeki ürünler sıralanarak kullanıcıya gösterilir.

    for (let i = 0; i < sepet.length; i++) {
    console.log("- " + sepet[i]);
    }

💸 5. Ürün Fiyatlarının Toplamını Hesaplama (for...of)

for...of ile dizi elemanları üzerinde gezilir.
Her fiyat toplam değişkenine eklenir.

    for (let fiyat of fiyatlar) {
    toplam += fiyat;
    }

📊 6. Kullanıcı Bilgilerini Listeleme (for...in)

Bir nesnenin içindeki tüm anahtar-değer çifti yazdırılır.

    for (let bilgi in kullanici) {
    console.log(bilgi + ": " + kullanici[bilgi]);
    }

🔄 7. Şifre Doğrulama (while)

Kullanıcı doğru şifre girene veya 3 kez yanlış girene kadar döngü devam eder.
Tarayıcı ortamı için prompt() fonksiyonu kullanılır.

    while (girilenSifre !== dogruSifre && deneme < 3) {
    girilenSifre = prompt("Şifrenizi girin:");
    deneme++;
    }

🧠 Ekstra Bilgiler

for, for...of, for...in, while gibi döngüler farklı amaçlara hizmet eder.
if, else, else if ve switch gibi yapılarla program akışını kontrol ederiz.

