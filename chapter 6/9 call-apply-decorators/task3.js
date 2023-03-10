function debounce(f, ms) {
    let timer = Date.now();
    
    return function() {
      if (Date.now() >= timer) {
        f.apply(this, arguments);
        timer = Date.now() + ms;
      }
    };
}


////

function debounceTimeout(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}