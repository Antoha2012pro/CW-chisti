// масив.метод((item, index, arr)) => {}) // Це базовий синтаксис перебираючих методів масиву
// 1. item = Кожен елемент масиву
// 2. index = Кожен індекс масиву
// 3. arr = Внутрішня частина масиву

const people = [
    { name: "Олена", age: 25, city: "Київ", email: "olena@example.com", isActive: true },
    { name: "Іван", age: 32, city: "Львів", email: "ivan@example.com", isActive: false },
    { name: "Марія", age: 28, city: "Одеса", email: "maria@example.com", isActive: true },
    { name: "Петро", age: 40, city: "Харків", email: "petro@example.com", isActive: false },
    { name: "Анна", age: 22, city: "Дніпро", email: "anna@example.com", isActive: true },
    { name: "Дмитро", age: 35, city: "Чернівці", email: "dmytro@example.com", isActive: true },
    { name: "Наталя", age: 30, city: "Полтава", email: "natalia@example.com", isActive: false },
    { name: "Олег", age: 27, city: "Вінниця", email: "oleh@example.com", isActive: true },
    { name: "Катерина", age: 29, city: "Запоріжжя", email: "kateryna@example.com", isActive: false },
    { name: "Сергій", age: 31, city: "Тернопіль", email: "serhiy@example.com", isActive: true }
];
// const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// ForEach = єдиний метод який нічого не повертає, а просто перебирає масив замість циклу for
// numbers.forEach((item, index, arr) => {
//     console.log(`Елемент масиву: ${item}. Індекс масиву: ${index}. Масив: ${arr}`);
// })

// console.log(numbers);

// map = Перебираючий метод, він повертає новий масив такої ж самої довжини як і оригінальний, змінивши значення кожного елемента
// const result = numbers.map((item) => item * 2)
// console.log(result);

// const result = people.map((item) => item.age + 10);
// const result = people.map((item) => item.name);

// console.log(result);



// filter = перебираючий метод, перебирає масив до кожного елемента масиву, застосовує callback функцію, повертає новий масив в якій додає елементи які призводяться до true
// const result = people.filter((item) => item.age > 30).map((item) => item.name); // Імена людей яким більше 30 років

// const result = people.filter((a) => a.isActive); // Об'єкти там де є значення true
// const result = people.filter((a) => !a.isActive); // Об'єкти там де є значення false
// const result = people.filter((a) => a.isActive).map((a) => a.city); // Об'єкти там де є значення true та в яких містах вони проживают
// console.log(result);



// find = повертає елемент який задовільняє умову
const findEmail = "kateryna@example.com";
// const result = people.find((b) => b.email === findEmail);
const result = people.filter((b) => b.email === findEmail).map((b) => b.name);
console.log(result);
