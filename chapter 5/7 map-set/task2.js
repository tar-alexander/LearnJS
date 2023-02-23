function aclean(arr) {
    let map = new Map();
    arr.forEach( (string) => {
      map.set(string.toLowerCase().split("").sort().join(""), string);
    });

    return Array.from(map.values());
};