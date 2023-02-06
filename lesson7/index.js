// Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.*/

function game(maxThrows) {
  const min = 1;
  const max = 6;
  const firstPlayerArr = [];
  const secondPlayerArr = [];

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < maxThrows; i++) {
    firstPlayerArr.push(getRandomInt(min, max));
    secondPlayerArr.push(getRandomInt(min, max));
  }

  const sumOne = firstPlayerArr.reduce((sum, current) => (sum += current));
  const sumTwo = secondPlayerArr.reduce((sum, current) => (sum += current));

  if (sumOne > sumTwo) {
    return "The first player win!";
  } else if (sumOne < sumTwo) {
    return "The second player win!";
  } else {
    return "It's a draw!";
  }
}

console.log((game(3)));

  

// 2. Подсчитать количество Пятниц 13-ого с 01/01/2000 до сегодня.

function getFridays(date) {

  const dateOfStart = new Date(date);
  const dateOfToday = new Date();
  let counter = 0;
  
  while (dateOfToday.valueOf() > dateOfStart.valueOf()) {
     if (dateOfStart.getDay() === 5 && dateOfStart.getDate() === 13) {
      counter++;
      }
    dateOfStart.setDate(dateOfStart.getDate() + 1); 
  }
  
  return `Количество Пятниц 13-ого с ${date} до ${dateOfToday.toDateString()}: ${counter}`;
}

getFridays('2000-01-01'); // 40 пятниц 13-е


// 3. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а. числа изначальное число целое, числа разбивки - целые (4,6,5)

function divide(num, i) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const arr = [];

  while (i > 1) {
    let n = getRandomInt(0, num);
    arr.push(n);``
    num = num - n;
    i--;
  }
  arr.push(num);
  return arr;
}

divide(15, 3);

// б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

function dividePart(num, i) {
  function getRandomIntPart(min, max) {
    return min + Math.random() * (max - min);
  }
  
    const arr = [];
  
    while (i > 1) {
      let n = +(getRandomIntPart(0, num).toFixed(2));
      arr.push(n);
      num = +(num - n).toFixed(2);
      i--;
    }
    arr.push(num);
    return arr;
  }
  
dividePart(15, 3);

  