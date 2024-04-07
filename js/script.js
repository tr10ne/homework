//ЗАДАЧА 1 - Создание массива
const myArr1 = [7, 'John', {car: "Lada"}];
console.log(`Решение задачи #1:\nМассив:${myArr1}\nПервый элемент массива: ${myArr1[0]}\nДлина массива: ${myArr1.length}`);

//ЗАДАЧА 2 - Замена элементов массива
const myArr2 = [7, 'John', {car: "Lada"}];
const newMyArr2 = [...myArr2];
newMyArr2[1] = 'Trivon';
console.log(`Решение задачи #2:\nНачальный массив:${myArr2}\nИзмененный массив: ${newMyArr2}`);

//ЗАДАЧА 4 - Добавление элементов в массив
const myArr4 = [7, 'John', {car: "Lada"}];
const newMyArr4 = [...myArr4];
newMyArr4.push(4, 5, 6);
console.log(`Решение задачи #4:\nНачальный массив:${myArr4}\nИзмененный массив: ${newMyArr4}`);

//ЗАДАЧА 5 - Добавление элементов в начало массива
const myArr5 = [true, null];
const newMyArr5 = [...myArr5];
newMyArr5.unshift('Привет', 100);
console.log(`Решение задачи #5:\nНачальный массив:${myArr5}\nИзмененный массив: ${newMyArr5}\nДлина измененного массива: ${newMyArr5.length}`);

//ЗАДАЧА 6 - Добавление элемента по определенному индексу
const myArr6 = [1, 2];
const newMyArr6 = [...myArr6];
newMyArr6[10] = 'abc';
console.log(`Решение задачи #6:\nНачальный массив:${myArr6}\nИзмененный массив: ${newMyArr6}\nДлина измененного массива: ${newMyArr6.length}\nДлина массива 11, так как добавляются все ячейки с пустыми элементами с 0-го до 10-го`);

//ЗАДАЧА 7 - Массив объектов
const myArr7 = [
    {carBrand: 'Kia',
    price: 3000000,
    isAvailableForSale: true},
    {carBrand: 'Audi',
    price: 6000000,
    isAvailableForSale: false},
    {carBrand: 'Opel',
    price: 3500000,
    isAvailableForSale: true}
];
const newMyArr7 = [...myArr7];
newMyArr7.push({carBrand: 'Lada',
price: 1500000,
isAvailableForSale: true});
console.log(`Решение задачи #7:\nНачальный массив:${JSON.stringify(myArr7)}\nИзмененный массив: ${JSON.stringify(newMyArr7)}`);

//ЗАДАЧА 8 - Случайные числа
const myNumbers = [5, 7, 3, 1, 2];
const newMyNumbers = [...myNumbers]
const randomNum = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;
const addArr = (num) => newMyNumbers.push(num);
//на самом деле в процессе реализации я забыл про includes, он бы подошел здесь больше, но так как я уже начал делать таким способом решил довести до конца
do {
    let myRandom = randomNum();
    let check = null;
    for (let key of myNumbers) {
        if (myRandom === key) {
            check = 'no ok'
        }
    }
    if (check === null) {
        addArr(myRandom)
    }
} while (myNumbers.length === newMyNumbers.length)
console.log(`Решение задачи #8:\nНачальный массив: ${myNumbers}\nИзмененный массив: ${newMyNumbers}`);

//ЗАДАЧА 9 - Перебор элементов массива
const myCities = ['London', 'New York', 'Singapore'];
const newMyCities = [...myCities];
function cityInfo(city, index, arrayName) {
    return `${city} is at the ${+index + 1} position in the ${arrayName} array\n`;
}
let cityInfoReturn = '';
for (let i in myCities) {
    cityInfoReturn = cityInfoReturn + cityInfo(myCities[i], i, 'myCities');
}
console.log(`Решение задачи #9:\n${cityInfoReturn}`);

//ЗАДАЧА 10 - Поиск объектов в массиве
const posts = [
  { postId: 1355, commentsQuantity: 5 },
  { postId: 5131, commentsQuantity: 13 },
  { postId: 6134, commentsQuantity: 2 },
]
let findPostById = (id, massive) => {for (let key of massive) {
    if (key.postId === id) {
        return key;
        }
    }
    return undefined;
}
console.log(`Решение задачи #10:\nПример для существующего ID - ${JSON.stringify(findPostById(5131, posts))}\nПример для не существующего ID - ${JSON.stringify(findPostById(666, posts))}`);