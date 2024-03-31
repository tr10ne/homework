//как и прошлый раз создаю константы для кнопок
const btn_age = document.querySelector('.btn_age'),
    btn_spec = document.querySelector('.btn_spec'),
    btn_num = document.querySelector('.btn_num'),
    btn_year = document.querySelector('.btn_year'),
    btn_pali = document.querySelector('.btn_pali'),
    btn_convert = document.querySelector('.btn_convert'),
    btn_sale = document.querySelector('.btn_sale'),
    btn_play = document.querySelector('.btn_play'),
    btn_digit = document.querySelector('.btn_digit'),
    btn_yourAge = document.querySelector('.btn_your-age'),
    btn_modul = document.querySelector('.btn_modul'),
    btn_time = document.querySelector('.btn_time'),
    btn_coordinates = document.querySelector('.btn_coordinates'),
    btn_month = document.querySelector('.btn_month'),
    btn_calculate = document.querySelector('.btn_calculate'),
    btn_compare = document.querySelector('.btn_compare'),
    btn_figure = document.querySelector('.btn_figure'),
    btn_planet = document.querySelector('.btn_planet'),
    btn_personAge = document.querySelector('.btn_personAge'),
    btn_logIn = document.querySelector('.btn_logIn'),
    btn_check21 = document.querySelector('.btn_check21'),
    btn_check22 = document.querySelector('.btn_check22'),
    btn_check23 = document.querySelector('.btn_check23'),
    btn_checkTask1 = document.querySelector('.btn_checkTask1'),
    btn_checkTask2 = document.querySelector('.btn_checkTask2'),
    btn_checkTask3 = document.querySelector('.btn_checkTask3'),
    btn_checkTask4 = document.querySelector('.btn_checkTask4'),
    btn_checkTask5 = document.querySelector('.btn_checkTask5'),
    btn_checkTask6 = document.querySelector('.btn_checkTask6');

//Задача 1 - Возраст
//забираю данные из формы по клику (каюсь нагуглил)
btn_age.addEventListener('click',() => {
    let userAge = document.querySelector("#userAge").value;
    if (userAge <= 0) {
        alert('Да не может быть!')
    } else if (userAge > 0 && userAge <= 12) {
        alert('Да Вы ещё ребенок')
    } else if (userAge > 12 && userAge <= 17) {
        alert('Вы подросток')
    } else if (userAge > 17 && userAge <= 60) {
        alert('Поздравляю, Вы взрослый человек')
    } else if (userAge > 60) {
        alert('Сожалею, Вам не долго осталось, Вы - пенсионер')
    }
})
//Далее аналогично

//Задача 2 - Спецсимволы
btn_spec.addEventListener('click',() => {
    let spec = +document.querySelector("#spec").value;
    switch (spec) {
        case 1:
            alert('под этой цифрой на Вашей клавиатуре есть знак "!"')
            break
        case 2:
            alert('под этой цифрой на Вашей клавиатуре есть знак "@"')
            break
        case 3:
            alert('под этой цифрой на Вашей клавиатуре есть знак "#"')
            break
        case 4:
            alert('под этой цифрой на Вашей клавиатуре есть знак "$"')
            break
        case 5:
            alert('под этой цифрой на Вашей клавиатуре есть знак "%"')
            break
        case 6:
            alert('под этой цифрой на Вашей клавиатуре есть знак "^"')
            break
        case 7:
            alert('под этой цифрой на Вашей клавиатуре есть знак "&"')
            break
        case 8:
            alert('под этой цифрой на Вашей клавиатуре есть знак "*"')
            break
        case 9:
            alert('под этой цифрой на Вашей клавиатуре есть знак "("')
            break
        case 0:
            alert('под этой цифрой на Вашей клавиатуре есть знак ")"')
            break
        default:
            alert('введите число от 0 до 9')
    }
})

//Задача 3 - Одинаковые цифры
btn_num.addEventListener('click',() => {
    let reNum = document.querySelector("#reNum").value, x;
        while (reNum.length != 3 || reNum <= 0) {
            reNum = prompt('Введите любое, но именно трехзначное число', 'Например, 123')
        };
    for (let i = 0; i < reNum.length; i++) {
        if (reNum[i] === reNum[i + 1]) {
            x = reNum[i]
        }
    };
    if (x === undefined) {
        alert(`В Вашем числе все цифры уникальны, ${reNum}`)
    } else {
        alert(`В Вашем числе повторяется цифра ${x}`)
    }
})

//Задача 4 - Високосный год
btn_year.addEventListener('click',() => {
    let leapYear = document.querySelector("#leapYear").value;
        (leapYear % 400 === 0) || (leapYear % 4 === 0 && leapYear % 100 !== 0) ? alert(`${leapYear} - это високосный год, напряглись!`) : alert(`${leapYear} - это обычный год, всё в порядке, можно расслабиться`);
})

//Задача 5 - Палиндром
btn_pali.addEventListener('click',() => {
    let palindrom = document.querySelector("#palindrom").value, 
        mordnilap = '';
        while (palindrom.length != 5 || palindrom < 0) {
            palindrom = prompt('Пятизначное - значит 5 цифр', 'Например, 12321')
        };
    for (let i = palindrom.length - 1; i >= 0; i--) {
        mordnilap += palindrom[i]
        };
    if (mordnilap === palindrom) {
        alert(`Ваше число ${palindrom} является палиндромом`)
    } else {
        alert(`Число ${palindrom} палиндромом не является`)
    }
})

//Задача 6 - Конвертер валют
btn_convert.addEventListener('click',() => {
    let enterUsd = document.querySelector("#enterUsd").value,
        changeConvert = document.querySelector("#convert").value,
        convertResult;
    const eurUsd = 1.5, uanUsd = 2, aznUsd = 2.5;
        while (enterUsd <= 0) {
            enterUsd = prompt('Сумма долларов такой быть не может, введите корректную сумму строго больше 0', 'Например, $100')
        };
        if (changeConvert === 'EUR') {
            convertResult = eurUsd * enterUsd
            alert(`На сегодняшний день за ${enterUsd}$ дают ${convertResult.toFixed(2)} евро`)
        } else if (changeConvert === 'UAN') {
            convertResult = uanUsd * enterUsd;
            alert(`На сегодняшний день за ${enterUsd}$ дают ${convertResult.toFixed(2)} юаней`)
        } else if (changeConvert === 'AZN') {
            convertResult = aznUsd * enterUsd;
            alert(`На сегодняшний день за ${enterUsd}$ дают ${convertResult.toFixed(2)} Азербайджанских манат`)
        }
})

//Задача 7 - Скидка
btn_sale.addEventListener('click',() => {
    let purchaseSum = document.querySelector("#purchaseSum").value, finalPrice;
        while (purchaseSum <= 0) {
            purchaseSum = prompt('Сумма долларов такой быть не может, введите корректную сумму строго больше 0', 'Например, 2000')
        };
        if (purchaseSum > 200 && purchaseSum <= 300) {
            finalPrice = purchaseSum - purchaseSum * 0.03;
            alert(`Сумма к оплате ${finalPrice} рублей`)
        } else if (purchaseSum > 300 && purchaseSum <= 500) {
            finalPrice = purchaseSum - purchaseSum * 0.05;
            alert(`Сумма к оплате ${finalPrice} рублей`)
        } else if (purchaseSum > 500) {
            finalPrice = purchaseSum - purchaseSum * 0.07;
            alert(`Сумма к оплате ${finalPrice} рублей`)
        } else {
            alert(`Сумма к оплате ${purchaseSum} рублей`)
        }
})

//Задача 8 - Викторина
btn_play.addEventListener('click',() => {
    let firstQuestion = prompt(`Начнем тест по географии! Итак, столица Ирландии?`, 'Введите ответ с большой буквы'),
        secondQuestion = prompt(`Принято, следующий вопрос. Столица Австралии?`, 'Введите ответ с большой буквы'),
        thirdQuestion = prompt(`Принято, и последний самый сложный вопрос. Столица Новой Зеландии?`, 'Введите ответ с большой буквы'),
        firstAnswer = 'Дублин',
        secondAnswer = 'Канберра',
        thirdAnswer = 'Веллингтон',
        score = 0;
        if (firstQuestion === firstAnswer) {
            score += 2;
        } else {
            score +=1;
        }
        if (secondQuestion === secondAnswer) {
            score += 2;
        } else {
            score +=1;
        }
        if (thirdQuestion === thirdAnswer) {
            score += 2;
        } else {
            score +=1;
        }
        alert(`Поздравляю! Вы набрали ${score} из 6 баллов`)
})

//Задача 9 - Положительное или нет
btn_digit.addEventListener('click',() => {
    let digit = document.querySelector("#digit").value;
    if (digit > 0) {
        alert(`Ваше число ${digit} - положительное`)
    } else if (digit < 0) {
        alert(`Ваше число ${digit} - отрицательное`)
    } else if (digit === '') {
        alert(`Похоже Вы ничего не ввели попробуйте ещё раз`) 
    } else {
        alert(`Ваше число - НОЛЬ!`)
    }
})

//Задача 10 - Возраст в диапазоне
btn_yourAge.addEventListener('click',() => {
    let yourAge = document.querySelector("#yourAge").value;
    if (yourAge > 0 && yourAge <= 4) {
        alert(`Сомнительно, что Вы смогли добраться до клавиатуры, но допустим я верю, что ${yourAge} год(а) действительно Ваш возраст`)
    } else if (yourAge > 5 && yourAge < 120) {
        alert(`Похоже Вы не обманываете и ${yourAge} лет действительно Ваш возраст`)
    }
    else {
        alert(`Зачем обманываете? Не хорошо!`)
    }
})

//Задача 11 - Модуль числа
btn_modul.addEventListener('click',() => {
    let modul = document.querySelector("#modul").value;
    alert(`Модуль этого числа = ${Math.abs(modul)}`)
})

//Задача 12 - Правильность ввода времени
btn_time.addEventListener('click',() => {
    let time = document.querySelector("#time").value,
    searchTime,
    partTime, 
    hour, second, minute,
    checkTime;
    do {
        do {
            searchTime = time.indexOf(':');
            if (searchTime === -1 || searchTime === 0) {
                time = prompt('Введите время в указанном формате', 'Например, 16:56:28') 
            } else {
                hour = time.slice(0, searchTime);
                partTime = time.slice(searchTime + 1);
                searchTime = partTime.indexOf(':');
                if (searchTime === -1 || searchTime === 0) {
                    time = prompt('Введите время в указанном формате', 'Например, 16:56:28')
                } else {
                    checkTime = 'ok';
                    minute = partTime.slice(0, searchTime);
                    second = partTime.slice(searchTime + 1);
                }
            } 
        } while (checkTime !== 'ok')
        checkTime = '';
        if (hour < 0 || hour >= 23) {
            time = prompt('Часы не могут буть меньше нуля или больше 24, пожалуйста, введите время в указанном формате', 'Например, 16:56:28') 
        } else if (minute < 0 || minute >= 59) {
            time = prompt('Минуты не могут буть меньше нуля или больше 60, пожалуйста, введите время в указанном формате', 'Например, 16:56:28')            
        } else if (second < 0 || second >= 59) {
            time = prompt('Секунды не могут буть меньше нуля или больше 60, пожалуйста, введите время в указанном формате', 'Например, 16:56:28')
        } else {
            checkTime = 'ok';
            alert(`Московское время ${hour} час(а/ов) ${minute} минут(а/ы) и ${second} секунд(а/ы)`)
        }
    } while (checkTime !== 'ok')
})

//Задача 13 - Номер четверти
btn_coordinates.addEventListener('click',() => {
    let coordinateX = document.querySelector("#coordinateX").value;
    let coordinateY = document.querySelector("#coordinateY").value;
    let сoordinates;
    if (coordinateX == 0 && coordinateY == 0) {
        сoordinates = 'centr'
    } else if (coordinateX == 0 && coordinateY > 0) {
        сoordinates = 'bottom'
    } else if (coordinateX == 0 && coordinateY < 0) {
        сoordinates = 'top'
    } else if (coordinateX > 0 && coordinateY == 0) {
        сoordinates = 'right'
    } else if (coordinateX < 0 && coordinateY == 0) {
        сoordinates = 'left'
    } else if (coordinateX > 0 && coordinateY > 0) {
        сoordinates = 'top right'
    } else if (coordinateX > 0 && coordinateY < 0) {
        сoordinates = 'bottom right'
    } else if (coordinateX < 0 && coordinateY < 0) {
        сoordinates = 'bottom left'
    } else if (coordinateX < 0 && coordinateY > 0) {
        сoordinates = 'top left'
    }
    switch (сoordinates) {
        case 'centr':
            alert('Бинго! Вы попали в центр координат.')
            break
        case 'top':
            alert('Точка находится в верхней половине кооридинат')
            break
        case 'bottom':
            alert('Точка находится в нижней половине кооридинат')
            break
        case 'right':
            alert('Точка находится в правой половине кооридинат')
            break
        case 'left':
            alert('Точка находится в левой половине кооридинат')
            break
        case 'top right':
            alert('Точка находится в верхней правой четверти кооридинат, 0-ая четверть')
            break
        case 'bottom right':
            alert('Точка находится в нижней правой четверти кооридинат, 1-ая четверть')
            break
        case 'bottom left':
            alert('Точка находится в нижней левой четверти кооридинат, 2-ая четверть')
            break
        case 'top left':
            alert('Точка находится в верхней левой четверти кооридинат, -1-ая четверть')
            break
        default:
            alert('Кажется Вы не правильно ввели данные, попробуйте ещё раз')
    }
})

//Задача 14 - Номер месяца
btn_month.addEventListener('click',() => {
    let month = document.querySelector("#month").value;
    switch (+month) {
        case 1:
            alert('Месяц Январь')
            break
        case 2:
            alert('Месяц Февраль')
            break
        case 3:
            alert('Месяц Март')
            break
        case 4:
            alert('Месяц Апрель')
            break
        case 5:
            alert('Месяц Май')
            break
        case 6:
            alert('Месяц Июнь')
            break
        case 7:
            alert('Месяц Июль')
            break
        case 8:
            alert('Месяц Август')
            break
        case 9:
            alert('Месяц Сентябрь')
            break
        case 10:
            alert('Месяц Октябрь')
            break
        case 11:
            alert('Месяц Ноябрь')
            break
        case 12:
            alert('Месяц Декабрь')
            break   
        default:
            alert('Номер месяца введен некорректно, введите число от 1 до 12')
    }
})

//Задача 15 - Калькулятор
btn_calculate.addEventListener('click',() => {
    let oneDigit = document.querySelector("#oneDigit").value,
        digitAction = document.querySelector("#digitAction").value,
        twoDigit = document.querySelector("#twoDigit").value,
        calculate;
    if (digitAction === '+') {
        alert(`${oneDigit} + ${twoDigit} = ${calculate = +oneDigit + +twoDigit}`)
    } else if (digitAction === '-') {
        alert(`${oneDigit} - ${twoDigit} = ${calculate = +oneDigit - +twoDigit}`)
    } else if (digitAction === '*') {
        alert(`${oneDigit} * ${twoDigit} = ${calculate = +oneDigit * +twoDigit}`)
    } else if (digitAction === '/') {
        alert(`${oneDigit} / ${twoDigit} = ${calculate = +oneDigit / +twoDigit}`)
    }
})

//Задача 16 - Большее из числе
btn_compare.addEventListener('click',() => {
    let oneFigure = document.querySelector("#oneFigure").value,
        twoFigure = document.querySelector("#twoFigure").value;
    if (+oneFigure == +twoFigure) {
        alert(`Числа равны`) 
    } else {
        +oneFigure > +twoFigure ? alert(`${oneFigure} большее число`) : alert(`${twoFigure} большее число`)
    }
})

//Задача 17 - Число кратно 5
btn_figure.addEventListener('click',() => {
    let figure = document.querySelector("#figure").value;
    if (+figure === 0) {
        alert(`Число ${figure} это ноль`) 
    } else if (+figure % 5 === 0) {
        alert(`Число ${figure} кратно 5`)
    } else {
        alert(`Число ${figure} НЕ кратно 5`) 
    }
})

//Задача 18 - Привет землянин
btn_planet.addEventListener('click',() => {
    let planet = document.querySelector("#planet").value;
    if (planet === "Земля" || planet === "земля") {
        alert(`Привет, землянин!`)
    } else {
        alert(`Привет, инопланетянин!`)
    }
})

//Задача 19 - Не входит в диапазон
btn_personAge.addEventListener('click',() => {
    let personAge = document.querySelector("#personAge").value;
    if (personAge <= 0) {
        alert(`Возраст не может быть отрицательным или нулевым`)
    } else if (personAge >= 14 && personAge <= 90) {
        alert(`Возраст ${personAge} входит в диапазон от 14 до 90`)
    } else {
        alert(`Возраст ${personAge} в диапазон от 14 до 90 НЕ входит`)
    }
})

//Задача 20 - Авторизация
btn_logIn.addEventListener('click',() => {
    let logIn = prompt('Введите логин'),
        password;
    if (logIn == null) {
        alert(`Отменено`)
    } else if (logIn !== 'Админ') {
        alert(`Я Вас не знаю!`)
    } else {
        password = prompt('Введите пароль')
        if (password == null) {
            alert(`Отменено`)
        } else if (password === 'Я главный') {
            alert(`Здравствуйте!`)
        } else {
            alert(`Неверный пароль!`)
        }
    }
})

//Задача 21 - Переделать if
btn_check21.addEventListener('click',() => {
    window.open('./js/script.js', '_blank');
    let result21;
    a + b < 4 ? result21 = 'Мало' : result21 = 'Много';
    console.log(result21);
})

//Задача 22 - Переделать if….else
btn_check22.addEventListener('click',() => {
    const login22 = prompt('введите логин',''); 
    let message;
    login22 == 'Сотрудник' ? message = 'Привет' 
        : login22 == 'Директор' ? message = 'Здравствуйте'
        : login22 == '' ? message = 'Нет логина'
        : message = ''
    alert(message);
    window.open('./js/script.js', '_blank');
})

//Задача 23 - Сравнение переменных
btn_check23.addEventListener('click',() => {
    let myVariable1 = 10;
    let myVariable2 = '5';
    +myVariable1 <= +myVariable2 ? console.log('true') : console.log('false');
    myVariable1 = '20';
    myVariable2 = 100;
    +myVariable1 <= +myVariable2 ? console.log('true') : console.log('false');
})


//Дополнительные задачи
//Задача 1
btn_checkTask1.addEventListener('click',() => {
    let rub, rubSale;
    do {
        rub = +prompt('Введите цену товара в рублях', 'Например, 25.99 рублей')
    } while (rub <= 0)
    do {
        rubSale = +prompt('Введите размер скидки', 'Например, 20%')
    } while (rubSale <= 0)
    alert(`Цена товара, руб: ${rub}
Скидка, %: ${rubSale}
Итого скидка, руб.: ${rub*rubSale/100}`)
})

//Задача 2
btn_checkTask2.addEventListener('click',() => {
    let yourNum = prompt('Введите любое число', 'Например, 13.456'), wholePart, fractPart,
        dot = yourNum.indexOf(',');
        yourNum = yourNum.replace(yourNum[dot], '.');
        dot = yourNum.indexOf('.');
        if (dot === -1) {
            wholePart = yourNum;
            fractPart = 0;
        } else {
        wholePart = yourNum.slice(0, dot);
        fractPart = yourNum.slice(dot);
        fractPart = 0 + fractPart;
        fractPart = +fractPart.toFixed(4);
        }
        alert(`Введено число: ${yourNum}
Целая часть: ${wholePart}
Дробная часть: ${fractPart}`)
})

//Задача 3
btn_checkTask3.addEventListener('click',() => {
    let yourText = prompt('Введите любой текст', ''),
        rand = Math.floor(Math.random() * (5 - 1 + 1)) + 1,
        long = yourText.length;      
        yourText = yourText.padStart(rand + long, '*');
        long = yourText.length;
        yourText = yourText.padEnd(rand + long, '*');
    alert(yourText);
})

//Задача 4
btn_checkTask4.addEventListener('click',() => {
    let userNum1 = prompt('Введите любое целое число', 'Например, 8'),
        userNum2 = prompt('Введите ещё одно любое целое число', 'Например, 16');
        if (userNum1 === userNum2) {
            userNum1 = prompt('Числа равны, введите любое целое число', 'Например, 8')
            userNum2 = prompt('Введите ещё одно любое целое число', 'Например, 16')
        } else if (userNum1 < userNum2) {
            min = Math.round(userNum1)
            max = Math.round(userNum2)
        } else {
            min = Math.round(userNum2)
            max = Math.round(userNum1)
        }
    let userRand1 = Math.floor(Math.random() * (max - min + 1)) + min,
        userRand2 = Math.floor(Math.random() * (max - min + 1)) + min,
        userRand3 = Math.floor(Math.random() * (max - min + 1)) + min;
    alert(`Диапазон от ${Math.round(userNum1)} до ${Math.round(userNum2)}
Случайное число №1: ${userRand1}
Случайное число №2: ${userRand2}
Случайное число №3: ${userRand3}`);
})

//Задача 5
btn_checkTask5.addEventListener('click',() => {
    let userSeconds, userMinutes, userHours;
    do {
        userSeconds = prompt('Введите количество секунд', 'Например, 120')
    } while (userSeconds <= 0);
        userMinutes = userSeconds/60;
        userHours = userMinutes/60;
    alert(`Введено секунд: ${userSeconds}
это целых ${Math.floor(userMinutes)} минут
и целых ${Math.floor(userHours)} часов`);
})

//Задача 6
btn_checkTask6.addEventListener('click',() => {
    let mySeconds, myMinutes, myHours;
    do {
        mySeconds = prompt('Введите количество секунд', 'Например, 120')
    } while (mySeconds <= 0);
    myHours = Math.floor(mySeconds / 3600);
    myMinutes = Math.floor((mySeconds % 3600) / 60);
    mySeconds = mySeconds % 60;
    myHours = myHours.toString().padStart(2, '0');
    myMinutes = myMinutes.toString().padStart(2, '0');
    mySeconds = mySeconds.toString().padStart(2, '0');
    alert(`Указанное время: ${myHours}:${myMinutes}:${mySeconds}`);
})