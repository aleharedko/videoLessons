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



//  LESSON 18/19 !!!!!!!!!!
function getRandomElement(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex]
}

function makePhrases() {
    const words1 = ['мой кот', 'моя собака', 'мой попугай'];
    const words2 = ['любит есть', 'хочет погрызть', 'всегда ищет'];
    const words3 = ['морковку', 'макароны', 'косточку'];

    // const randomIndex1 = Math.floor(Math.random() * words1.length);
    // const randomIndex2 = Math.floor(Math.random() * words2.length);
    // const randomIndex3 = Math.floor(Math.random() * words3.length);

    //const prase = getRandomElement(words1) + " " + getRandomElement(words2) + " " + getRandomElement(words3)  // более читаемый вариант
    //return prase

    return getRandomElement(words1) + " " + getRandomElement(words2) + " " + getRandomElement(words3) //более лаконичный вариант

}

// const result =  makePhrases()  один из способов вывода кода
// console.log(result);

console.log(makePhrases());  // ещё один способ вывода





