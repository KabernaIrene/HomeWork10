const numbers = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

const positiveElements = numbers.filter((number) => number > 0);
const sumPositiveEl = positiveElements.reduce((accumulator, number) => accumulator + number, 0);

alert (`Кількість позитивних елементів: ${positiveElements.length}\n
        їх сума: ${sumPositiveEl}`);
//1.Знайти суму та кількість позитивних елементів.


const minElement = numbers.reduce((accumulator, number) => Math.min(accumulator, number));
let element1 = numbers.indexOf(minElement, [0]);
alert(`Мінімальний елемент масиву - ${minElement}, його порядковий номер ${element1 + 1}`);
//2.Знайти мінімальний елемент масиву та його порядковий номер.

const maxElement = numbers.reduce((accumulator, number) => Math.max(accumulator, number));
let element2 = numbers.indexOf(maxElement, [0]);
alert(`Мінімальний елемент масиву - ${maxElement}, його порядковий номер ${element2 + 1}`);
//3.Знайти максимальний елемент масиву та його порядковий номер.



const negativeElements = numbers.filter((number) => number < 0);
alert (`Кількість негативних елементів: ${negativeElements.length}`);
//4.Визначити кількість негативних елементів.

const oddElements = positiveElements.filter((number) => number % 2 == !0);
alert (`Кількість непарних позитивних елементів: ${oddElements.length}`);
//5.Знайти кількість непарних позитивних елементів.

const evenElements = positiveElements.filter((number) => number % 2 === 0);
alert (`Кількість парних позитивних елементів: ${evenElements.length}`);
//6.Знайти кількість парних позитивних елементів.

const sumEvenEl = evenElements.reduce((accumulator, number) => accumulator + number, 0);
alert(`сума парних позитивних елементів ${sumEvenEl}`);
//7.Знайти суму парних позитивних елементів.

const sumOddEl = oddElements.reduce((accumulator, number) => accumulator + number, 0);
alert(`сума непарних позитивних елементів ${sumOddEl}`);
//8.Знайти суму непарних позитивних елементів.

const product = positiveElements.reduce((accumulator, number) => accumulator * number, 1);
alert(`Добуток позитивних елементів ${product}`);
//9.Знайти добуток позитивних елементів.

const element = numbers.slice(18, 19);
alert(element);

//10.Знайти найбільший серед елементів масиву, остальні обнулити.

