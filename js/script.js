//task 1 - Объединение строк
let yourName = 'John', yourLastName = 'Trivon', yourProfession = 'frontend developer';
let about = `Меня зовут ${yourName} ${yourLastName} и я ${yourProfession}.`;
console.log(about);

//task 2 - Получить данный от пользователя
//хочу сделать открытие окна по клику на кнопку
//нахожу кнопку

const btn = document.querySelector('.btn');
const btn_last = document.querySelector('.btn_last');

//вызываю переменную и модальное окно по клику

btn.addEventListener('click',() => {
    let user = prompt('Как Вас зовут?', 'John');
    alert(`Привет ${user}!`);

    //task 3 - Сколько лет пользователю (продолжаю предыдущую задачу)
    let userYear = prompt('В каком году Вы родились?', '2000');
    const year = 2024;
    alert(`Вам так много лет, целых - ${year - userYear}!`);

    //task 4 - Периметр квадрата (продолжаю предыдущую задачу)
    let userSide = prompt('Введите сторону квадрата', '10');
    alert(`Прекрасно! Периметр Вашего квадрата - ${userSide * 4}.`);

    //task 5 - Площадь окружности (продолжаю предыдущую задачу)
    let userRadius = prompt('Введите радиус окружности', '5');
    alert(`Отлично! Площадь Вашей окружности, примерно ${(Math.PI * userRadius ** 2).toFixed(1)}.`);  
    
    //task 6 - Определить скорость движения (продолжаю предыдущую задачу)
    let userDistance = prompt('Сколько километров от Вашего города до Москвы?', '200'),
        userTime = prompt('За сколько часов Вы бы хотели добраться до столицы?', '2');
    alert(`Ого, да Вы оптимист! Вам нужно двигаться со средней скоростью ${(userDistance/userTime).toFixed(1)} км/ч.`); 

    //task 7 - Конвертор валют (продолжаю предыдущую задачу)
    const euro = 0.92;
    let userDollars = prompt('Сколько долларов у Вас есть?', '1');
    alert(`Не густо! Это всего ${(euro * userDollars).toFixed(2)}€.`); 
    
    //task 8 - Количество файлов на флешке (продолжаю предыдущую задачу)
    let userSSD = prompt('Флешка на сколько Гб у Вас есть?', '32'),
        userFile = prompt('Каков средний размер одного Вашего файла в Кб?', '2048');
    alert(`В таком случае количество файлов, которое поместится на флешку не более ${Math.floor((userSSD * 1048576) / userFile)}.`);

    //task 9 - Количество шоколадок (продолжаю предыдущую задачу)
    let userMoney = prompt('Сколько рублей у Вас в кошельке прямо сейчас?', '1000'),
        userChokolatePrice = prompt('Шоколадки по какой цене Вы обычно покупаете?', '64.50'),
        balance = (userMoney % userChokolatePrice).toFixed(2),
        remains = balance.toString(),
        residual = remains.indexOf('.'),
        balanceRUB = remains.slice(0, residual),
        balanceKOP = remains.slice(residual+1);
    alert(`Да Вы богач, ${Math.floor(userMoney/userChokolatePrice)} - это количество шоколадок, которые Вы сможете купить. И ещё около ${(balanceRUB)} рублей ${balanceKOP} копеек у Вас останется.`);

    //task 10 - Задом наперед (продолжаю предыдущую задачу)
    let userNumber = prompt('Введите любое трехзначное число', '123'),
        flipNumberLast = userNumber[2],
        flipNumber = userNumber.replace(userNumber[2], userNumber[0]);
        flipNumber = flipNumber.replace(userNumber[0], flipNumberLast);
    alert(`Оппа, во чё могу! Теперь ваше число стало ${flipNumber}. Магия:)`);

    //task 11 - Возведение во 2-ую степень (продолжаю предыдущую задачу)
    let userDigit = prompt('Введите любое число', '25');
    alert(`Фокус-покус! ${userDigit ** 2}.`);

    //task 12 - Среднее арифметическое (продолжаю предыдущую задачу)
    let userFigure1 = prompt('Давайте закрепим, введите ещё одно любое число', '15'),
        userFigure2 = prompt('А теперь ещё одно', '45');
    alert(`Среднее арифметическое введенных Вами чисел ${(+userFigure1 + +userFigure2) / 2}.`);

    //task 13 - Площадь квадрата (продолжаю предыдущую задачу)
    let userSideSquare = prompt('Укажите, пожалуйста, длину стороны квадрата ещё раз', '2');
    alert(`Площадь такого квадрата равна ${userSideSquare * userSideSquare}.`);

    //task 14 - Калькулятор (продолжаю предыдущую задачу)
    let userNumberCalc1 = prompt('Давайте покажу, как уменю считать, введите первое число', '6'),
        userNumberCalc2 = prompt('А теперь введите второе число', '8');
    alert(`Думаю можно было сделать данную задачу через цикл IF или с использованием объекта, но мы это ещё не проходили, а я не хочу спешить. Пока результаты вычислений следующие:\n${userNumberCalc1} + ${userNumberCalc2} = ${+userNumberCalc1 + +userNumberCalc2}\n${userNumberCalc1} - ${userNumberCalc2} = ${userNumberCalc1 - userNumberCalc2}\n${userNumberCalc1} * ${userNumberCalc2} = ${userNumberCalc1 * userNumberCalc2}\n${userNumberCalc1} / ${userNumberCalc2} = ${userNumberCalc1 / userNumberCalc2}`);

    //task 15 - Километры в мили (продолжаю предыдущую задачу)
    let userKilometr = prompt('Введите расстояние в километрах', '30');
    const mili = 0.621;
    alert(`Вы знали, что в милях это будет ${(userKilometr * mili).toFixed(2)}?`);

    //task 16 - До конца дня (продолжаю предыдущую задачу)
    let userHour = prompt('Который час?', '15'),
        userMinute = prompt('А минут сколько?', '40');
    alert(`До конца дня осталось около ${24 - userHour - 1} часов ${60 - userMinute} минут.`);

    //task 17 - Вторая цифра (продолжаю предыдущую задачу)
    let userQuantity1 = prompt('Введите, пожалуйста, ещё раз трехзначное число', '987');
    alert(`Вторая цифра введеного чиcла - ${Math.floor((userQuantity1/10) % 10)}.`);

    //task 18 - Последняя цифра (продолжаю предыдущую задачу)
    let userQuantity2 = prompt('А теперь введите пятизначное число', '12345'),
        userQuantity2Mod = (userQuantity2[4]+userQuantity2).slice(0, userQuantity2.length);
    alert(`Абра Кадабра! ${userQuantity2Mod}.`);

    //task 19 - Зарплата (продолжаю предыдущую задачу)
    const salary = 20000;
    let userSales = prompt('Введите сумму продаж за месяц', '150000');
    alert(`А ведь Ваша зарплата могла бы быть ${userSales * 0.2 + salary} руб.`);

    //task 20 - Остаток от деления (продолжаю предыдущую задачу)
    let userCount1 = prompt('Сейчас покажу ещё один фокус. Введите любое число', '300'),
        userCount2 = prompt('И ещё одно', '500');
    alert(`Так вот остаток от деления этих чисел друг на друга равен ${userCount1 % userCount2}.`);
})

//task 21 - ИЛИ и И операторы
console.log(3 || (true && null) || false); //до первого верного

//task 22 - Альтернативные операторы 
let a = 10;
console.log(a += 1);
console.log(a *= 2);
console.log(a -= 5);
console.log(a /= 2); 

//task 23 - Что будет в результате (хочу вывести по клику)
btn_last.addEventListener('click',() => {
    alert(null || 2 || undefined); // до первого верного, поэтому 2
    alert(alert(1) || 2 || alert(3)); // до первого верного, но так как программа идет по порядку, то сначала будет выполнена команда alert(1), после чего программа пойдут дальше и выведет 2, на которой остановится
    alert(1 && null && 2); // до первого неверного, поэтому null
    alert(null || 2 && 3 || 4); // до первого верного поэтому 2 или 3, а среди них, до первого неверного, а так как такого нет, проверены все и выведено последнее взаимодействие, то есть 3    
})
