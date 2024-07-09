// Exercise 1:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNums = nums.map(num => num * 2);
console.log(doubledNums); 

// Exercise 2:
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping); 
console.log(secondTopping);

// Exercise 3:
const car = {
    make: 'Audi',
    model: 'q5',
  };
  const { make, model } = car;
  console.log(make); 
  console.log(model); 
// Exercise 4:
const pizzaToppings_1 = ['Pineapple', 'Olives', 'Anchovies'];


const controversialPizzaToppings = [...pizzaToppings_1];
console.log(controversialPizzaToppings); 

// Exercise 5:
const car_1= {
    make: 'Audi',
    model: 'q5',
  };
  const myCar = { ...car_1, model: 'q7' }; 
  console.log(car_1); 
  console.log(myCar);

// Exercise 6:
const userProfile = {};
const propertyName = 'username';
userProfile[propertyName] = 'JohnDoe';
console.log(userProfile);

// Exercise 8:
const describeNoun = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}.`);
  }
  describeNoun(); 
  describeNoun('dog', 'black');

// Exercise 9:

let pizza = 'tasty';
pizza === 'tasty' ? console.log('yum') : console.log('yuck')


// Exercise 10:

const localLangConfig = null;  
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG); 

const userSavedTheme = null; 

const USER_THEME = userSavedTheme || 'light';

console.log('User theme setting:', USER_THEME); 
