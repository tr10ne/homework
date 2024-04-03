const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
//Объявляю переменные
    let task, question;

//Цикл для выбора задания
    do {
        task = prompt('Введите номер задания, которое хотите проверить', 'от 1 до 29');
    } while (isNaN(task) || (task < 1 || task > 29) && task !== null);

//Условие для того чтобы, если цикл прекратится отменой, код ниже не выполнялся
    if (!isNaN(task) && (task >= 1 && task <= 29) && task !== null) {
        
    //Создаю вспомогательную функцию чтобы не дублировать одинаковые куски кода
        function myQuestion() {
            question = prompt(`Чтобы закончить введите любой символ или нажмите "Отмена"\n ------------------------------------------------------\n Чтобы проверить следующее задание нажмите "Продолжить"`);
            if (question !== '' || question === null) {
            
            //этот момент загуглил
                throw new Error('До свидания!')
            } else {
            }
        }

    //ЗАДАЧА 1 - Объявление и вызов функции
        function myName() {
            alert(`Решение Задачи #1:\n\nJohn Trivon`)    
        }
    
    //ЗАДАЧА 2 - Присваивание функции переменной
        let yourName = nName => `Привет, ${nName}`;
        console.log(yourName('John'));
        console.log(yourName('Trivon'));

    //ЗАДАЧА 3 - Стрелочная функция
        let helloWorldObviously = () => {
            return `Привет, мир!`
        }
        console.log(helloWorldObviously());
        let helloWorldImplicitly = () => `Привет, мир!`;
        console.log(helloWorldImplicitly());
    
    //ЗАДАЧА 4 - Функция «разница чисел»
        function diffNum(x, y) {
            let diffResult = x - y
            alert(`Решение задачи #4:\n\nТип параметров: ${typeof x} и ${typeof y}\nТип возвращаемого значения: ${typeof diffResult}\nВозвращаемое значение: ${diffResult}`)
            return diffResult
        }

    //ЗАДАЧА 5 - Колбэк функция
        let helloWorld = () => console.log(`Привет, мир!`);
        setTimeout(helloWorld, 5000);

    //ЗАДАЧА 6 - Параметры функции по умолчанию
        function weatherForecast(city, weather = 'Отличная погода!') {
            alert(`Решение задачи #6:\n\n${city}, ${weather}`)
        }

    //ЗАДАЧА 7 - Сумма чисел
        function sumNumbers(...numbers) {
            let total = 0;
            for (let number of numbers) {
                total += number;
            }
            console.log('Сумма чисел:', total);
            return total;
        }

    //ЗАДАЧА 8 - Проверка наличия аргументов в вызове функции
        function sumNumbersMod(...numbers) {
            if (numbers.length === 0) {
                console.log('Функция "sumNumbers" не может быть вызвана без аргумента');
            }
            let total = 0;
            for (let number of numbers) {
                total += number;
            }
            console.log('Сумма чисел:', total);
            return total;
        }

    //ЗАДАЧА 9 - Шаблонные строки
        let templateLiteral = num => {
            if (num < 19) {
                alert(`Решение Задачи #9:\n\nЧисло: ${num}\nЭто число меньше или равно 19\nКвадратный корень этого числа ${Math.sqrt(num)}`)
            } else {
                alert(`Решение Задачи #9:\n\nЧисло: ${num}\nЭто число больше или равно 19\nКвадратный корень этого числа ${Math.sqrt(num)}`)
            }
        }

    //ЗАДАЧА 10 - Зона видимости функции
        const b = 2
        let d = 15
        function myFn1(a) {
        let b
        let d = 10
        myFn2(b)
        }
        function myFn2(a) {
        let c = 5
        console.log(a, b, c, d)
        }
        myFn1()   
        
    //ЗАДАЧА 11 - Тернарный оператор
        let isNumber = a => {return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`}
        console.log(isNumber(10))  // 10 - это число
        console.log(isNumber('Привет'))  // Привет - это не число
        console.log(isNumber(true))  // true - это не число
    
    //ЗАДАЧА 12 - Стрелочные функции
        let mult = (a, b) => a * b
        setTimeout(() => {
            console.log(mult(5, 10));
        }, 1000)// 50
    
    //ЗАДАЧА 13 - Параметры функции по умолчанию
        function multiplyBy(a, mult = 2) {
            console.log(a * mult);
        }
        multiplyBy(2)  // 4
        multiplyBy(2, undefined)  // 4
        multiplyBy(2, 0)  // 0
        multiplyBy(5, 10)  // 50

    //ЗАДАЧА 14 - Шаблонные строки
        const cars = {
            car1: { brand: 'Honda', price: 13000 },
            car2: { brand: 'Rolls-Royce', price: 120000 }
        }
        function carsInfo(cars) {
            let carsInfoResult = '';
            for (let i in cars) {
                let cost = cars[i].price <= 20000 ? 'дешевая' : 'дорогая';
                carsInfoResult = carsInfoResult + `Цена автомобиля ${cars[i].brand} - ${cars[i].price}$ и это ${cost} машина\n `;
            }
            return carsInfoResult;
        }

    //ЗАДАЧА 15 - Перебор свойств объекта
        const objectWithNumbers = {
            a: 10,
            b: 20,
            c: 'string',
            d: 12,
        }
        let sumObjectValuesResult = 0;
        function sumObjectValues(objectWithNumbers) {
            for (let i in objectWithNumbers) {
                if (typeof objectWithNumbers[i] === 'number') {
                    sumObjectValuesResult += objectWithNumbers[i]
                }
            }
            return sumObjectValuesResult;
        }

    //ЗАДАЧА 16 – Проверка числа
        function twoNum(m, n) {
            m = Number(m);
            n = Number(n);
            if (m < n) {
                return -1 + `, второе число больше чем первое`;
            } else if (m > n) {
                return 1 + `, первое число больше чем второе`;
            } else {
                return 0 + `, числа равны`;
            }
        }

    //ЗАДАЧА 17 – Создать число
        function addNum(k, l, p) {
            return k * 100 + l * 10 + p;
        }

    //ЗАДАЧА 18 – Площадь квадрата или прямоугольника
        function squre(w, h) {
            alert(`Решение задачи #18:\n\nПлощадь фигуры = ${w * h}`)
        }

    //ЗАДАЧА 19 – Часы
        function oClock(myHours, myMinutes, mySeconds) {
            myHours = myHours.toString().padStart(2, '0');
            myMinutes = myMinutes.toString().padStart(2, '0');
            mySeconds = mySeconds.toString().padStart(2, '0');
            alert(`Решение задачи #19:\n\nУказанное время: ${myHours}:${myMinutes}:${mySeconds}`);
        }

    // ЗАДАЧА 20 – Переводим в секунды
    function clocoSec(yourHours, yourMinutes, yourSeconds) {
        yourSec = yourSeconds + yourMinutes * 60 + yourHours * 3600;
        alert(`Решение задачи #20:\n\nУказанное время в секундах: ${yourSec} сек`);
    }

    // ЗАДАЧА 21 – Переводим секунды в ЧАСЫ МИНУТЫ
        function secoClock(mySec) {
            let myHour = Math.floor(mySec / 3600),
                myMin = Math.floor((mySec % 3600) / 60);
            mySec = mySec % 60;
            myHour = myHour.toString().padStart(2, '0');
            myMin = myMin.toString().padStart(2, '0');
            mySec = mySec.toString().padStart(2, '0');
            alert(`Решение задачи #21:\n\nУказанное время: ${myHour}:${myMin}:${mySec}`);
        }
    
    //ЗАДАЧА 22 – Разница времени
        function devoClock(userHour1, userMin1, userSec1, userHour2, userMin2, userSec2) {
            let userSec1Total = userSec1 + userMin1 * 60 + userHour1 * 3600,
                userSec2Total = userSec2 + userMin2 * 60 + userHour2 * 3600,
                devSec = Math.abs(userSec1Total - userSec2Total);
            let devHour = Math.floor(devSec / 3600),
                devMin = Math.floor((devSec % 3600) / 60);
            devSec = devSec % 60;
            hourResult = devHour.toString().padStart(2, '0');
            minResult = devMin.toString().padStart(2, '0');
            secResult = devSec.toString().padStart(2, '0');
            alert(`Решение задачи #22:\n\nРазница в указанном времени: ${hourResult} час(а/ов) ${minResult} минут(а/ы) ${secResult} секунд(а/ы)`);
        }

    //ЗАДАЧА 23 – Меньшее из чисел
        let minNum = (q, s) => q < s ? q : s < q ? s : 'Введеные числа равны'

    //ЗАДАЧА 24 – Число в степень
        let degree = (u, r) => u ** r 

    //ЗАДАЧА 25 – Калькулятор
        function calculate(oneDigit, twoDigit, digitAction) {
            if (digitAction === '+') {
                alert(`Решение задачи #25:\n\n${oneDigit} + ${twoDigit} = ${calculate = +oneDigit + +twoDigit}`)
            } else if (digitAction === '-') {
                alert(`Решение задачи #25:\n\n${oneDigit} - ${twoDigit} = ${calculate = +oneDigit - +twoDigit}`)
            } else if (digitAction === '*') {
                alert(`Решение задачи #25:\n\n${oneDigit} * ${twoDigit} = ${calculate = +oneDigit * +twoDigit}`)
            } else if (digitAction === '/') {
                alert(`Решение задачи #25:\n\n${oneDigit} / ${twoDigit} = ${calculate = +oneDigit / +twoDigit}`)
            }
        }

    //ЗАДАЧА 26 – Таблица умножения
        function multiTable(numeral) {
            let cell = '';
            for (let i = 2; i < 10; i++) {
                cell = cell + `${numeral} * ${i} = ${numeral * i}\n`;
            }
            alert(`Решение задачи #25:\n\nТаблица умножения для числа ${numeral}:\n${cell}`)
        }

    //ЗАДАЧА 27 – Пароль
        let checkPassword = p => p === 'Step' || p === 'Web' || p === 'JavaScript' ? true : false

    //ЗАДАЧА 28 – День недели
        function dayWeek(ordinal) {
            let week = {
                0: 'Sunday',
                1: 'Monday',
                2: 'Tuesday',
                3: 'Wednesday',
                4: 'Thursday',
                5: 'Friday',
                6: 'Saturday'
            }
            alert(`Решение задачи #28:\n\nДень недели: ${week[ordinal]}`)
        }

    //ЗАДАЧА 29 – Умножаем все числовые свойства на 2
        function multiplyNumeric(obj) {
            for (let key in obj) {
                if (typeof obj[key] === 'number') {
                    obj[key] *= 2;
                }
            }
        }
        

    //Мои инициативы
        task = +task;
        switch (task) {
            case 1: 
                myName();
                myQuestion();
            case 2:
                nName = prompt('Как Вас зовут?');
                alert(`Решение Задачи #2:\n\n${yourName(nName)}`);
                myQuestion();
            case 3:
                alert(`Решение задачи #3:\n\n${helloWorldObviously()}`);
                myQuestion();
            case 4:
                x = prompt('Введите любой набор символов');
                y = prompt('И ещё раз');
                diffNum(x, y);
                myQuestion();
            case 5:
                alert('Решение задачи #5:\n\nРезультат в консоле');
                myQuestion();
            case 6:
                city = prompt('Введите Ваш город', 'Например, Тула');
                let weatherQuestion = prompt('Хотите указать погоду?', 'Y/N');
                if (weatherQuestion === 'Y') {
                    weather = prompt('Какая у Вас погода?', ''); 
                } else {
                }
                weatherForecast(city, weather);
                myQuestion();
            case 7:
                alert('Решение Задачи #7:\n\nОтвет по задаче в файле script.js, так как мы ещё не проходили как передать в функцию массив чисел');
                window.open('./js/script.js', '_blank');
                myQuestion();
            case 8:
                alert('Решение Задачи #8:\n\nОтвет по задаче в файле script.js, так как мы ещё не проходили как передать в функцию массив чисел. Добавлено условие для проверки длины строки аргумента');
                window.open('./js/script.js', '_blank');
                myQuestion();
            case 9:
                num = prompt('Введите любое числов', 'Например, 9');
                templateLiteral(num);
                myQuestion();
            case 10:
                alert('Ответ на задачу #10:\n\nВ консоле будет выведено "undefined", так как переменная "a" нигде не объявлена, потом 2, потому что константа "b" является глобальной, поэтому будет выведена во второй функции, так как внутри функции не была объявлена, а внутри первой функции является локальной переменной, потом 5, потому что внутри второй функции объявлена локальная переменная "с" и ей присвоено значение и наконец 15, так как внутри второй функции переменной "d" не присвоено, берется глобальная, а в первой функции переменная "d" является локальной.')
                myQuestion();
            case 11:
                alert('Решение Задачи #11:\n\nРезультат в файле script.js');
                window.open('./js/script.js', '_blank');
                myQuestion();
            case 12:
                alert('Решение Задачи #12:\n\nРезультат в файле script.js');
                window.open('./js/script.js', '_blank');
                myQuestion();
            case 13:
                alert('Решение Задачи #13:\n\nРезультат в файле script.js. Ответ на вопрос: использовать "ИЛИ" нельзя потому что при значении 0 будет ложь и сразу произойдет замена значения на 2, но нам требуется вхождение значения 0');
                window.open('./js/script.js', '_blank');
                myQuestion();
            case 14:
                alert(`Решение Задачи #14:\n\n${carsInfo(cars)}`);
                myQuestion();
            case 15:
                alert(`Решение Задачи #15:\n\n${sumObjectValues(objectWithNumbers)}`);
                myQuestion();
            case 16:
                m = prompt('Введите любое число', 'Например, 4');
                n = prompt('Введите любое число', 'Например, 21');
                alert(`Решение Задачи #16:\n\n${twoNum(m, n)}`);
                myQuestion();
            case 17:
                do {
                    let klp, klpDot;
                    do {
                        klpDot = 0;
                        klp = prompt('Введите 3 любые цифры через запятую', 'Например, 3,9,5');
                        for (let i in klp) {
                            if (klp[i] === ',') {
                                klpDot++
                            }
                        }
                    } while (klpDot !== 2 && klp.length !== 5);
                    const klpNum = {
                        1: 0,
                        2: 0,
                        3: 0
                    }
                    klpDot= '';
                    for (let i in klpNum) { 
                        klpDot = klp.indexOf(',')
                        if (klpDot !== -1) {
                            klpNum[i] = klp.slice(0, klpDot)
                            klp = klp.slice(klpDot + 1)
                            klp = klp.trim()
                        } else {
                            klpNum[i] = klp
                        }
                    }
                    k = +klpNum[1];
                    l = +klpNum[2];
                    p = +klpNum[3];
                } while (k < 0 || l < 0 || p < 0)
                alert(`Решение Задачи #17:\n\n${addNum(k, l, p)}`);
                myQuestion();
            case 18:
                w = prompt('Укажите длину стороны прямоугольной фигуры', '');
                let sideQuestion = prompt('Если Ваша фигура квадрат, просто нажмите продолжить\nЕсли Вы хотите ввести вторую сторону введите Y', '');
                if (sideQuestion === 'Y') {
                    h = prompt('Введите длину второй стороны', ''); 
                } else {
                    h = w;
                }
                squre(w, h);
                myQuestion();
            case 19:
                do {
                    myHours = prompt('Введите количество часов', 'Например, 2')
                    myMinutes = prompt('Введите количество минут', 'Например, 25')
                    mySeconds = prompt('Введите количество секунд', 'Например, 40')
                } while ((myHours < 0 || myHours >= 24 || isNaN(myHours)) || (myMinutes < 0 || myMinutes >= 60 || isNaN(myMinutes)) || (mySeconds < 0 || mySeconds >= 60 || isNaN(mySeconds)));
                oClock(myHours, myMinutes, mySeconds);
                myQuestion();
            case 20:
                do {
                    let yourClock;
                    let colonDot = 0;
                    do {
                        yourClock = prompt('Введите время в формате чч:мм:cc', 'Например, 12:45:05');
                        for (let i in yourClock) {
                            if (yourClock[i] === ':') {
                                colonDot++
                            }
                        }
                    } while (colonDot !== 2 && yourClock.length !== 8);
                    let yourClockArr = yourClock.split(':');
                    yourHours = +yourClockArr[0];
                    yourMinutes = +yourClockArr[1];
                    yourSeconds = +yourClockArr[2];
                } while ((yourHours < 0 || yourHours >= 24 || isNaN(yourHours)) || (yourMinutes < 0 || yourMinutes >= 60 || isNaN(yourMinutes)) || (yourSeconds < 0 || yourSeconds >= 60 || isNaN(yourSeconds)));
                clocoSec(yourHours, yourMinutes, yourSeconds);
                myQuestion();
            case 21:
                do {
                    mySec = prompt('Введите количество секунд', 'Например, 120')
                } while (mySec <= 0);
                secoClock(mySec);
                myQuestion();
            case 22:
                do {
                    let userClock1, userClock2;
                    let devColon = 0;
                    do {
                        userClock1 = prompt('Введите первое время в формате чч:мм:cc', 'Например, 12:45:05');
                        userClock2 = prompt('Введите второе время в формате чч:мм:cc', 'Например, 12:45:05');
                        for (let i in userClock1) {
                            if (userClock1[i] === ':') {
                                devColon++
                            }
                        }
                        for (let i in userClock2) {
                            if (userClock2[i] === ':') {
                                devColon++
                            }
                        }
                    } while (devColon !== 8 && userClock1.length !== 8 && userClock2.length !== 8);
                    let userClockArr = userClock1.split(':');
                    userHour1 = +userClockArr[0];
                    userMin1 = +userClockArr[1];
                    userSec1 = +userClockArr[2];
                    userClockArr = userClock2.split(':');
                    userHour2 = +userClockArr[0];
                    userMin2 = +userClockArr[1];
                    userSec2 = +userClockArr[2];
                } while ((userHour1 < 0 || userHour1 >= 24 || isNaN(userHour1)) || (userMin1 < 0 || userMin1 >= 60 || isNaN(userMin1)) || (userSec1 < 0 || userSec1 >= 60 || isNaN(userSec1)) || (userHour2 < 0 || userHour2 >= 24 || isNaN(userHour2)) || (userMin2 < 0 || userMin2 >= 60 || isNaN(userMin2)) || (userSec2 < 0 || userSec2 >= 60 || isNaN(userSec2)));
                devoClock(userHour1, userMin1, userSec1, userHour2, userMin2, userSec2)
                myQuestion();
            case 23:
                do {
                    q = prompt('Введите первое любое число', 'Например, 6');
                    s = prompt('Введите второе любое число', 'Например, 3');
                } while (isNaN(q) && isNaN(s));
                alert(`Решение задачи #23:\n\n${minNum(q, s)}`)
                myQuestion();
            case 24:
                do {
                    u = prompt('Введите первое любое число', 'Например, 6');
                    r = prompt('Введите второе любое число', 'Например, 3');
                } while (isNaN(u) && isNaN(r));
                alert(`Решение задачи #24:\n\nЧисло ${u} в степени ${r} равно ${degree(u, r)}`)
                myQuestion();
            case 25:
                do {
                    oneDigit = prompt('Введите первое любое число', 'Например, 6')
                    twoDigit = prompt('Введите первое любое число', 'Например, 3')
                    digitAction = prompt('Введите действие, которое необходимо сделать с числами', '* / + -')
                } while (isNaN(oneDigit) && isNaN(twoDigit) && (digitAction !== '*' || digitAction !== '/' || digitAction !== '+' || digitAction !== '-'));
                calculate(oneDigit, twoDigit, digitAction);
                myQuestion();
            case 26:
                do {
                    numeral = prompt('Введите любое число', 'Например, 7')
                } while (isNaN(numeral));
                multiTable(numeral);
                myQuestion();
            case 27:
                do {
                    p = prompt('Введите пароль', '')
                } while (!isNaN(p));
                alert(`Решение задачи #27:\n\n${checkPassword(p)}`);
                myQuestion();
            case 28:
                do {
                    ordinal = prompt('Введите любое число от 0 до 6', '')
                } while (isNaN(ordinal) || ordinal < 0 || ordinal > 6);
                dayWeek(ordinal);
                myQuestion();
            case 29:
                let menu = {
                    width: 200,
                    height: 300,
                    title: "My menu"
                  };
                alert(`Решение задачи #27:\n\nДо вызова функции:\n${JSON.stringify(menu)}`);
                multiplyNumeric(menu);
                alert(`Решение задачи #27:\n\nПосле вызова функции:\n${JSON.stringify(menu)}`);
    } 
    } else {
    }
})