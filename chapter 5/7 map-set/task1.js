function unique(arr) {
    let set = new Set();
    arr.forEach(function(element) {
      set.add(element);
    });
    return Array.from(set);
}