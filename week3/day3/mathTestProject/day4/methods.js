// Örnek dizi
const numbers = [1, 2, 3, 4, 5, 6];

// 1. filter(): Şarta uyan elemanları filtreler (true dönenler alınır)
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers (filter):", evenNumbers); // [2, 4, 6]

// 2. map(): Her elemanı dönüştürür, yeni bir dizi döner
const squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers (map):", squaredNumbers); // [1, 4, 9, 16, 25, 36]

// 3. reduce(): Diziyi tek bir değere indirger (örn: toplama)
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers (reduce):", sum); // 21

// 4. find(): Şarta uyan ilk elemanı döner (bulursa), yoksa undefined
const found = numbers.find(num => num > 3);
console.log("First number > 3 (find):", found); // 4

// 5. push(): Diziye yeni eleman(lar) ekler (sondan), dizinin yeni uzunluğunu döner
const moreNumbers = [...numbers]; // Orijinali bozmamak için kopya aldık
moreNumbers.push(7);
console.log("After push:", moreNumbers); // [1, 2, 3, 4, 5, 6, 7]

// 6. pop(): Dizinin son elemanını çıkarır ve o elemanı döner
const popped = moreNumbers.pop();
console.log("Popped value:", popped); // 7
console.log("After pop:", moreNumbers); // [1, 2, 3, 4, 5, 6]

// 7. findIndex(): Şarta uyan ilk elemanın index'ini döner (bulamazsa -1)
const index = numbers.findIndex(num => num === 4);
console.log("Index of 4 (findIndex):", index); // 3

// 8. reverse(): Dizinin elemanlarını ters çevirir (orijinali değiştirir)
const reversed = [...numbers].reverse(); // orijinal bozulmasın diye kopya aldık
console.log("Reversed numbers:", reversed); // [6, 5, 4, 3, 2, 1]
