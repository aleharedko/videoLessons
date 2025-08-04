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


//LESSON 21/22


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
let highScoree = 0;

// while (i < scores.length) {
//     output = "Bubble solution #" + i + "score:" + scores[i];
//     console.log(output);
//     i++
// }

for (let i = 0; i < scores.length; i++) {
    if (highScoree < scores[i]) {
        highScoree = scores[i]
    }
    //     output = "Highest bubble score: " + highScoree;
    //     console.log(output);
}

console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScoree);

const bestSolutions = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] === highScoree) {
        bestSolutions.push(i)
    }
    
}

console.log("Solutions with highest score: " + bestSolutions);




