// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

const str = '001001';

let firstArr = str.slice(0, 3).split('');
let secondArr = str.slice(3).split('');

let firstSum = firstArr.reduce((sum, current) => sum + Number(current), 0);
let secondSum = secondArr.reduce((sum, current) => sum + Number(current), 0);

if (firstSum === secondSum) {
    console.log('да');
} else {
    console.log('нет');
}


// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}

console.log(`n = ${n}, num = ${num}`);


// 3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arr = [12, 15, 20, 25, 59, 79];
const result = arr.reduce((sum, current) => (sum + current / arr.length), 0);
console.log(result);


// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');

console.log(arr2);


// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 0, 'a', 'b');
arr3.splice(6, 0, 'c');
arr3.splice(8, 0, 'e');

console.log(arr3);


// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

const arrUnsorted = [3, 4, 1, 2, 7];
const arrSorted = arrUnsorted.sort((a, b) => a - b);

console.log(arrSorted);
