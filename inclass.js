console.log('Hello world 2')

// Day 2: Continue with control flow
// switch case statement
const day = new Date().getDay();
console.log(day, typeof day);

const literalDay = new Date().toString();
console.log(literalDay, typeof literalDay)

switch(day){
    case 0:
        console.log('Sunday');

    case 1:
        console.log('Monday')

    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log('Wednesday')
        break
    default:
        console.log('Some other day')
};

switch(literalDay.split(' ')[0]){
    case "Sun":
        console.log('Sunday!');
        break
    case "Mon":
        console.log('Monday!')
        break
    case "Tue":
        console.log("Tuesday!")
        
    case 'Wed':
        console.log('Wednesday!')
        break
    default:
        console.log('Some other day!!!')
};

// JS Object (Aka Python Dictionaries)
const person = {
    name: "Shoha",
    age: 9001,
    teams: [
        'Dodgers',
        'Lakers',
        'Rams'
    ],
    wallet: {
        visa: 100,
        amex: 1000,
        bofa: 20
    }
};

// access data in obj
console.log(person['name']) // bracket notation
console.log(person.name) // dot notation

// get keys / values / pairs
// person.keys() // this does not work
// .keys() is a static method
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

/// loop through the keys
for (let item in person){
    console.log(item)
};

for (let item of Object.keys(person)){
    console.log(item, 2)
};

// OOP 
// Prototypes vs Classes
// create a prototype
function Car(make, model=1000, y){
    this.make = make;
    this.model = model;
    this.year = y;
    this.mileage = 0;

    this.drive = function (miles){
        this.mileage += miles
        console.log(`Your odometer reading: ${this.mileage}`)
    }

    
    this.park = () => {
        console.log('parking..')
        console.log(`Your odometer reading: ${this.mileage}`)
    }
};

const c1 = new Car("Honda", "Civic", 1999)
console.log(c1.make)
console.log(c1.model)
console.log(c1.year)
c1.drive(100)
c1.drive(2000)
c1.park()

// Classes
class Sentient {
    constructor(lifespan=100){
        this.lifespan = lifespan
    }

    
    func1 = function(){
        console.log(1)
    }

    func2 = () => {console.log(2)}

}

being1 = new Sentient()
console.log(being1.lifespan)


class Human extends Sentient  {
    constructor(lifespan, name, age=0, color, hobbies=[]){
        super(lifespan)
        this.name = name
        this.age = age,
        this.favoriteColor = color,
        this.hobbies = hobbies
    }

    func2 = ()=>{
        console.log('this is Humans Function #2')
    }

    talk (){
        console.log(`Hi, my name is ${this.name}`)
    }
}

const h1 = new Human(101, 'Shoha', 9001, "Blue", ['biking', 'sailing'])
h1.func1()
h1.func2()
h1.talk()
console.log(h1.lifespan)

// destructring an array
const person1 = ["Shoha", "Tsuchida", 9001]
// const first_name = person1[0]
// const last_name = person1[1]
// const age = person1[2]
const [first_name, last_name, age] = person1 // destructure

// destructuring an object
// yopur variable name will be the key name
const pokemon = {
    pokemonName: "Pikachu",
    imgUrl: 'google.com',
    abilities: ['thunderbolt', 'shockwave'],
    hp: 10
}

const {imgUrl, abilities, pokemonName} = pokemon

console.log(imgUrl)
console.log(abilities)
console.log(pokemonName)

// Asynchornous Section of JS


function snooze5(action){
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    action()
}

snooze5(c1.park)

// Promises
const cook = dish => {
    return new Promise((resolve, reject)=>{
        if (dish == "pasta"){
            setTimeout(()=>{
                resolve('pasta is done!')
            }, 15000)
            
        }
        else if (dish == 'rice'){
            setTimeout(()=>{
                resolve('rice is done!')
            }, 10000)
        }
        else if (dish == 'fried rice'){
            setTimeout(()=>{
                resolve('fried rice is done!')
            }, 2000)
        }
        else {
            reject('i dont know how to cook that')
        }
    })
}

const res1 = cook('pasta')
const res2 = cook('rice')
const res3 = cook('pb&j sandwich')
console.log(res1)
console.log(res2)
console.log(res3)


// Handling response of a promise
// 2 ways
// old way: .then() / .catch()
cook('rice')
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log("Error", err)
})


// ES6 way async / await
// these keywords must be used within functions
const kitchen = async () => {
    cook('pasta')
    const res = await cook('rice')
    console.log(res)
    const res2 = await cook('fried rice')
    console.log(res2)
}
kitchen()

// these are the two place the keyword ASYNC will go
async function function1(){}
const function2 = async () => {}