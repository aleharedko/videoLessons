//LESSON 17!!!!!!!!!!!!!
// const score = [60,50, 60, 58, 54, 54, 58,50, 52, 54]; // [] - объявление переменной , квадратные скобки и то что внутри них называется литералом массива

// console.log(score[0]);
// console.log(score[2]);

// const pets = ["dog", "cat", "rat"];
// console.log(pets[2]);
// console.log(pets[3]);

// console.log(pets.length);  //метод для лпределения длины массивв

// pets[2] = 'parrot'
// console.log(pets);



//  LESSON 18/19/20 !!!!!!!!!!
const words1 = ['мой кот', 'моя собака', 'мой попугай'];
const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
const words3 = ['морковку', 'макароны', 'косточку'];
const words4 = ['hemster', 'enot', 'rat']



function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function makePhrases(param1, param2, param3) {
    // const words1 = ['мой кот', 'моя собака', 'мой попугай'];
    // const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
    // const words3 = ['морковку', 'макароны', 'косточку'];

    // const randomIndex1 = Math.floor(Math.random() * words1.length);
    // const randomIndex2 = Math.floor(Math.random() * words2.length);
    // const randomIndex3 = Math.floor(Math.random() * words3.length);

    //const prase = getRandomElement(words1) + " " + getRandomElement(words2) + " " + getRandomElement(words3)  // более читаемый вариант
    //return prase

    const result = getRandomElement(param1) + " " + getRandomElement(param2) + " " + getRandomElement(param3) //более лаконичный вариант
    return result
}

// const result =  makePhrases()  один из способов вывода кода
// console.log(result);

console.log(makePhrases(words4, words2, words3));  // ещё один способ вывода


//LESSON 21/22/23/24


// Bubble solution #0 score: 60
// Bubble solution #1 score: 50
// Bubble solution #2 score: 60
// Bubbles tests: 36
// Highest bubble score: 69
// Solutions with highest score: #11, #18

const scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

// let i = 0;
let output


// while (i < scores.length) {
//     output = "Bubble solution #" + i + "score:" + scores[i];
//     console.log(output);
//     i++
// }


//     output = "Highest bubble score: " + highScoree;
//     console.log(output);


console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScoree);



console.log("Solutions with highest score: " + bestSolutions);

const scores1 = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

const costs = [
    .25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

let highScoree = 0;
const bestSolutions = [];

for (let i = 0; i < scores1.length; i++) {
    if (scores1[i] === highScoree) {
        bestSolutions.push(i)
    }
}

function getBestScores(array, maxValue) {
    const bestSolutions = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
            bestSolutions.push(i)
        }
    }
    return bestSolutions
}

for (let i = 0; i < scores1.length; i++) {
    if (highScoree < scores1[i]) {
        highScoree = scores1[i]
    }
}

function getMostCostEffectiveSolution(resultArray, costArray, maxValue) {
    let index;
    const bestSolutions = getBestScores(resultArray, maxValue)
    if(costArray[bestSolutions[0]] < costArray[bestSolutions[1]]){
        index = bestSolutions[0]
    }else{
        index = bestSolutions[1]
    }
    return index
}

const resulCost = getMostCostEffectiveSolution(scores1, costs, highScoree)
console.log("luchee reshenie:" + resulCost);


const highScore = printGetGighScore(scores1)

function printGetGighScore(array) {
    let output
    let highScoree = 0;

    for (let i = 0; i < array.length; i++) {
        output = "Bubble solution #" + i + "score:" + scores1[i];
        console.log(output);
        if (highScoree < array[i]) {
            highScoree = array[i]
        }
        //     output = "Highest bubble score: " + highScoree;
        //     console.log(output);
    }
}

function getBestScores(array, maxValue) {
    const bestSolutions = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === maxValue) {
            bestSolutions.push(i)
        }
        return bestSolutions
    }
}

console.log(highScore);
console.log(getBestScores(scores1, 69));








