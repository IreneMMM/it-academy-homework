// 1. поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]

function arrReverse(arr) {
    return arr.reverse();
}

arrReverse([1, 2, 3, 4, 5, 6]);


// 2. найти максимальное значение числа в массиве ([3,67,15...])

function arrFindMax(arr) {
    let newArr = arr.sort((a, b) => b - a);
    return newArr[0];
}

arrFindMax([3, 67, 15, -10, 0, 46, 9]);


// 3. записать в массив ряд фибоначчи начиная с N члена с длинной массива M

function getFibonachi(n) {
    return n <= 1 ? n : getFibonachi(n - 1) + getFibonachi(n - 2);
}

function arrFibonachi(N, M) {
    let arr = [];

    for (let i = 0; i < M; i++) {
        arr.push(getFibonachi(N));
        N++;
    }
    return arr;
}

arrFibonachi(10, 10);


// 4. даны 2 4-х значных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )

function bullsAndCows(num1, num2) {
    let arr1 = num1.toString().split("");
    let arr2 = num2.toString().split("");
    let bulls = [];
    let cows = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (
                arr1[i] === arr2[j] &&
                arr1.indexOf(arr1[i]) === arr2.indexOf(arr2[j])
            ) {
                bulls.push(arr1[i]);

            } else if (
                arr1[i] === arr2[j] &&
                arr1.indexOf(arr1[i]) !== arr2.indexOf(arr2[j])
            ) {
                cows.push(arr1[i]);
            }
        }
    }

    return (`${bulls.length} и ${cows.length}`);
}

bullsAndCows(3487, 3794);


// 5. сортировка массива по возрастанию/убыванию

function sortArr(arr) {
    return arr.sort((a, b) => a - b) + ' ' + arr.sort((a, b) => b - a);
}

sortArr([1, 25, -7, 33, 567, 3]);


// 6. удалить из массива все повторяющиеся элементы

function uniqueArr(arr) {
    let uniqueArr = Array.from(new Set(arr));
    return uniqueArr;
}

uniqueArr([10, 25, 10, 33, 'abc', 567, 33, 'abc']);
