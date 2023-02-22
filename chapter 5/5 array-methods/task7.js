let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

//weird
let names = users.reduce( (string, current, index) => string + ( (index != 0) ? ", " : "") + current.name, "");

//ok
names = users.map( user => user.name);

alert( names ); // Вася, Петя, Маша