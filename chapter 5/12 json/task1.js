let user = {
  name: "Василий Иванович",
  age: 35
};

let json = `{"name": "Василий Иванович", "age": "35"}`;

let other = JSON.parse(json);

//решение
let user2 = JSON.parse(JSON.stringify(user));