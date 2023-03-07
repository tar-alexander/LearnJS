function inBetween(a, b) {
    return function(value) {
      return (value >= a) && (value <= b);
    }
}
  
function inArray(arr) {
    return function(value) {
      return (arr.indexOf(value) != -1);
    }
}