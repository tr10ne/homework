const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
//Объявляю переменные
    let task, question;

//Цикл для выбора задания
    do {
        task = prompt('Введите номер задания, которое хотите проверить', 'от 1 до 7');
    } while (isNaN(task) || (task < 1 || task > 7) && task !== null);

//Условие для того чтобы, если цикл прекратится отменой, код ниже не выполнялся
    if (!isNaN(task) && (task >= 1 && task <= 7) && task !== null) {
        
    //Создаю вспомогательную функцию чтобы не дублировать одинаковые куски кода
        function myQuestion() {
            question = prompt(`Чтобы закончить введите любой символ или нажмите "Отмена"\n ------------------------------------------------------\n Чтобы проверить следующее задание нажмите "Продолжить"`);
            if (question !== '' || question === null) {
            
            //этот момент загуглил
                throw new Error('До свидания!')
            } else {
            }
        }

    //ЗАДАЧА 1 - Проверка объекта
        const isEmpty = obj => {for (let key in obj) {return false} return true};
    
    //ЗАДАЧА 2 - Операторы "rest"  и "spread"
        const meanScore = (...num) => {if (num.length === 0) return 'Аргументов не задано'; let sum = 0; for (let i of num) {sum += i;}
        const average = sum / num.length;
        return average.toFixed(2);
        }

    //ЗАДАЧА 3 - Минимальный и максимальный параметр
        const minMax = (...num) => {
            if (num.length === 0 || num.length === 1) return 'Аргументов не задано, либо задан только 1 аргумент';
            let min = num[0];
            let max = num[0];
            for (let i in num) {
                if (min < num[i]) {
                    min = min
                } else {
                    min = num[i]
                }
                if (max > num[i]) {
                    max = max
                } else {
                    max = num[i]
                }
            }
            const minMaxObj = {
                'Минимальное значение': min,
                'Максимальное значение': max
            }
            return minMaxObj;
        }
    
    //ЗАДАЧА 4 - Spread Operator
        const person = {
            firstName: 'John',
            lastName: 'Trivon'
        },
            car = {
                marka: 'Peugeot',
                model: '3008',
                year: 2011  
            }
        const personCar = {...person, ...car};

    //ЗАДАЧА 5 - Копия объекта
        const cars = {
                marka: 'Peugeot',
                model: '3008',
                year: 2011  
        },
            myObj = {...cars};

    //ЗАДАЧА 6 - Копия объекта2
        const persons = {
            firstName: 'John',
            lastName: 'Trivon',
            car: {
                marka: 'Peugeot',
                model: '3008',
                year: 2011 
            }
        },
            newObj = JSON.parse(JSON.stringify(persons))

    //ЗАДАЧА 7 - Конвертация JSON <=> объекты
        const data = {
            firstName: 'John',
            lastName: 'Trivon',
            age: 33,
            address: {
                city: 'Tula',
                street: 'Vostochnaya',
                numHouse: 13
            }
        }
        const jsonData = JSON.stringify(data);
        const parsedData = JSON.parse(jsonData);

    //Мои инициативы
    task = +task;
    switch (task) {
        case 1: 
            let schedule = {};
            alert(`Решение Задачи #1:\n\nДля пустого объекта - ${isEmpty(schedule)}`);
            schedule["8:30"] = "get up";
            alert(`Решение Задачи #1:\n\nДля не пустого объекта - ${isEmpty(schedule)}`);
            myQuestion();

        case 2:
            alert(`Решение задачи #2:\n\nСреднее значение для пустого набора символов - ${meanScore()}\nСреднее значение для набора символов 3, 7, 6 - ${meanScore(3, 7, 6)}\nСреднее значение для набора символов 10, 20, 30, 40, 50 - ${meanScore(10, 20, 30, 40, 50)}`);
            myQuestion();

        case 3:
            alert(`Решение задачи #3:\n\nДля набора чисел 4, 2, 7, 5, 9 - ${JSON.stringify(minMax(4,2,7,5,9))}`);
            myQuestion();

        case 4:
            alert(`Решение задачи #4:\n\nПервый объект - ${JSON.stringify(person)}\n\nВторой объект - ${JSON.stringify(car)}\nОбъединение объектов - ${JSON.stringify(personCar)}`);
            myQuestion();

        case 5:
            alert(`Решение задачи #5:\n\nОбъект - ${JSON.stringify(cars)}\n\nКопия объекта - ${JSON.stringify(myObj)}`);
            myQuestion();

        case 6:
            alert(`Решение задачи #6:\n\nОбъект - ${JSON.stringify(persons)}\n\nКопия объекта - ${JSON.stringify(newObj)}`);
            myQuestion();

        case 7:
            alert(`Решение Задачи #7:\n\nОбъект - ${JSON.stringify(data)}\n\nОбъект в JSON - ${jsonData}\n\nКопия объекта из JSON - ${JSON.stringify(parsedData)}`);
    }
    } else {
    }
})