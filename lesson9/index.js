// 1. Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд. Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат его работы на экран.

function getRandomNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNum;
}

function promiseRace() {

    const promiseOne = new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, getRandomNum(1, 5) * 1000);
    });

    const promiseTwo = new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, getRandomNum(1, 5) * 1000);
    });

    const promiseThree = new Promise((resolve) => {
        setTimeout(() => {
            resolve(3);
        }, getRandomNum(1, 5) * 1000);
    });

    const result = Promise.race([promiseOne, promiseTwo, promiseThree]).then(value => console.log(value));
    return result;
}

promiseRace();

// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum() {
    return new Promise((res) => {
        setTimeout(() => {
            res(getRandomNum(1, 5));
        }, 3000);
    });
}

async function getNumSquared() {
    const value = await getNum();
    const result = Math.pow(value, 2);
    console.log(`The square of ${value} is ${result}`);
}

getNumSquared();

// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5. Сделайте также функцию getNum1, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию, которая с помощью await будет дожидаться результата getNum1, затем будет дожидаться результата getNum, а затем найдет сумму полученных чисел и выводит на экран.

function getNum1() {
    return new Promise((res) => {
        setTimeout(() => {
            res(getRandomNum(6, 10));
        }, 5000);
    });
};

async function getSum() {
    const result = await getNum().then((data) => data);
    const result1 = await getNum1().then((data) => data);

    console.log(`The sum of ${result1} and ${result} is ${result + result1}`);
}

getSum();
