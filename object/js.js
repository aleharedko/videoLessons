//lesson 25/26/27

//cars:
// make: "Chevy",
// model: "Bel Air",
// year: 1957,
// color: "red",
// passengers: 2,
// convertible: false,
// mileage: 102

// dog:
// name: "Fido",
// weight: 20.2,
// age: 4,
// breed: "mixed",
// activity: "fetch balls"

const car = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
}

const dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
}

//console.log(dog);
//console.log(dog.name);

dog.weight = 20;
dog.isDog = true

delete dog.activity

//console.log(dog)

if (car.mileage < 50000) {
    console.log("i by this car");
} else {
    console.log('dont need this car');

}

const number = 27

const newNumber = number

const newDog = dog
console.log(newDog);

newDog.weight = 55;
console.log(dog);

//lesson 28
const chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

const cadi = {
    make: "GM",
    model: "Cadillac",
    year: 1955,
    color: "tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
};

const fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

function preaual(car) {
    if (car.year > 1955 && car.mileage < 50000) {
        return true
    }
    return false
}

console.log( preaual(chevy));
