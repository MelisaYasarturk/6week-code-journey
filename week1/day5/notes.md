# 📘 JavaScript: Functions Using Conditionals and Loops

This document includes examples of JavaScript functions that combine conditionals and loops to solve practical problems. These functions are useful for real-world tasks such as processing shopping carts, user validation, or data classification.

---

🛒 toplamFiyatHesapla(urunler)

Description:
Calculates the total price of products in a shopping cart. If a product has a discount rate, the discounted price is used.

Parameters:

urunler (Array): Array of product objects with isim, fiyat, and optional indirimOrani.
Returns:

String: Total price formatted to two decimal places.
Usage Example:

toplamFiyatHesapla([
  { isim: "Kitap", fiyat: 100 },
  { isim: "Kalem", fiyat: 20, indirimOrani: 0.2 }
]);

---

yasKategorisi(yas)

Description:
Returns the age group of a person based on their age.

Parameters:

yas (Number): Age of the user.
Returns:

String: One of "Çocuk", "Genç", "Yetişkin", or "Yaşlı".
Usage Example:

yasKategorisi(25);



adminVarMi(kullanicilar)

Description:
Checks whether there is at least one user with the role of "admin" (case-insensitive).

Parameters:

kullanicilar (Array): Array of user objects with username and role.
Returns:

Boolean: true if admin exists, otherwise false.
Usage Example:

adminVarMi([
  { username: "ali", role: "user" },
  { username: "ayse", role: "Admin" }
]);

---

negatifSayiKontrol(dizi)

Description:
Checks if an array contains any negative numbers.

Parameters:

dizi (Array): Array of numbers.
Returns:

String: Message indicating if a negative number was found.
Usage Example:

negatifSayiKontrol([5, -2, 10]);

---

girisKontrol(kullaniciAdi, sifre, veriTabani)

Description:
Checks login credentials against a user database.

Parameters:

kullaniciAdi (String): Username input.
sifre (String): Password input.
veriTabani (Array): Array of user objects with username and password.
Returns:

String: Welcome message if credentials match, otherwise an error message.
Usage Example:

girisKontrol("admin", "1234", [
  { username: "admin", password: "1234" },
  { username: "user1", password: "pass" }
]);

---

✅ Summary

These functions are ideal examples to understand how conditional structures and loop constructs work together in JavaScript. They can be applied to various scenarios such as:

Calculating totals with optional logic
Categorizing data based on thresholds
Searching within arrays
Validating inputs with control structures