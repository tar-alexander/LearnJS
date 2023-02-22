function unique(arr) {
    let newArr = [];
    arr.forEach(function(element) {
      if (newArr.indexOf(element) == -1) {
        newArr.push(element);
      }
    });
    return newArr;
}