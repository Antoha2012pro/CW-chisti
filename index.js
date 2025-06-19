// // масив.метод((item, index, arr)) => {}) // Це базовий синтаксис перебираючих методів масиву
// // 1. item = Кожен елемент масиву
// // 2. index = Кожен індекс масиву
// // 3. arr = Внутрішня частина масиву

// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true }
// ];
// const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// // ForEach = єдиний метод який нічого не повертає, а просто перебирає масив замість циклу for
// // numbers.forEach((item, index, arr) => {
// //     console.log(`Елемент масиву: ${item}. Індекс масиву: ${index}. Масив: ${arr}`);
// // })

// // console.log(numbers);

// // map = Перебираючий метод, він повертає новий масив такої ж самої довжини як і оригінальний, змінивши значення кожного елемента
// // const result = numbers.map((item) => item * 2)
// // console.log(result);

// // const result = people.map((item) => item.age + 10);
// // const result = people.map((item) => item.name);

// // console.log(result);



// // filter = перебираючий метод, перебирає масив до кожного елемента масиву, застосовує callback функцію, повертає новий масив в якій додає елементи які призводяться до true
// // const result = people.filter((item) => item.age > 30).map((item) => item.name); // Імена людей яким більше 30 років

// // const result = people.filter((a) => a.isActive); // Об'єкти там де є значення true
// // const result = people.filter((a) => !a.isActive); // Об'єкти там де є значення false
// // const result = people.filter((a) => a.isActive).map((a) => a.city); // Об'єкти там де є значення true та в яких містах вони проживают
// // console.log(result);



// // find = повертає елемент який задовільняє умову
// const findEmail = "kateryna@example.com";
// const result = people.find((b) => b.email === findEmail);
// const result = people.filter((b) => b.email === findEmail).map((b) => b.name);
// console.log(result);





// Урок 2

// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true }
// ];


// every = повертає true або false чи пройшли всі елементи масиву перевірку
// const result = people.every((item) => item.isActive);
// console.log(result);

// some = повертає true або false якщо хочаб одна перевірка пройшла успішна
// const result = people.some((item) => item.isActive);
// console.log(result);


// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро", ["Сергій", "Петро", ["Сергій", "Петро"]]] }
// ];

// // flatMap = розпаковує масиви та пакує їх у один. Він розпаковує лише одну вкладеність, наприклад якщо у масиві є ще масив, воно не розпакується
// const result = people.flatMap((item) => item.friends);
// console.log(result);

// // flat = приймає тільки number. розпаковує вкдладеність у вкладеності. Приклад: friends: ["Олег", "Дмитро", ["Сергій", "Петро", ["Сергій", "Петро"]]].
// const archiv = result.flat(2);
// console.log(archiv);


// const people = [
//     { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
//     { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
//     { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
//     { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
//     { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
//     { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
//     { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
//     { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
//     { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
//     { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро", ["Сергій", "Петро", ["Сергій", "Петро"]]] }
// ];

// // Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)

// const result = people.map((item) => ({
//     ...item,
//     points: item.points * 1.1,
// }));
// console.log(people);
// console.log(result);



// Отримати масив всіх хардкорних гравців з поінтами більше 100

const people = [
    { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true, points: 120, friends: ["Іван", "Марія"] },
    { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false, points: 90, friends: ["Олена", "Петро"] },
    { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true, points: 135, friends: ["Олена", "Анна"] },
    { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false, points: 75, friends: ["Іван", "Дмитро"] },
    { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true, points: 140, friends: ["Марія", "Олег"] },
    { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true, points: 110, friends: ["Петро", "Сергій"] },
    { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false, points: 95, friends: ["Катерина", "Іван"] },
    { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true, points: 130, friends: ["Анна", "Сергій"] },
    { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false, points: 85, friends: ["Наталя", "Дмитро"] },
    { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true, points: 100, friends: ["Олег", "Дмитро"]}
];

// const result = people.map((item) => {
//     if (item.points > 100) {
//         console.log(`У ${item.name} менше чим 100 поінтів`);
//     } else {
//         console.log(`У ${item.name} менше ніж 100 поінтів`);
//     }
// })

// Отримати масив імен у яких у друзях є марія


const result = people.filter((item) => item.friends.includes("Марія")).map((item) => item.name);
console.log(result);
