function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

alert( counter.up() ); // 1, то же самое кроме того что преинкремент, а не пост-
alert( counter.up() ); // 2
alert( counter.down() ); // 1, к одной переменной обращаются