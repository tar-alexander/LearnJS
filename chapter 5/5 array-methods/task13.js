function groupById(arr) {
    return arr.reduce( function(object, current) {
      object[current.id] = current;
      return object;
    }, {});
  }