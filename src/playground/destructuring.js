// const person = {
//     name: 'Marcelo',
//     age: 21,
//     location: {
//         city: 'Atlanta',
//         temp: 65
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp} = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(`Publisher of the book is ${publisherName}`)


// Array destructuring

const address = ['203 Pineland Dr', 'Smyrna',, '30082'];

const [, city, state = 'Ga', zip] = address;

console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [hotCoffee, , mediumPrice] = item;

console.log(`A medium ${hotCoffee} cost ${mediumPrice}`)