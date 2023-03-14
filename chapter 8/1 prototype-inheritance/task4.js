let hamster = {
  stomach: [],

  eat(food) {
    if (this.hasOwnProperty("stomach")) {
      this.stomach.push(food); 
    } else {
      this.stomach = [ food ];
    }
  }
};

let speedy = {
  __proto__: hamster
};

let lazy = {
  __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
alert( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert( lazy.stomach ); // apple

/*проблема была в том, что у speedy не было propert stomach,
поэтому движок обращался к прототипу hamster и добавил food к hamster.stomach*/