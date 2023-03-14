function throttle(f, ms) {
    let args, savedThis;
    let cooldown = false;
    
    return function wrapper() {
      if (cooldown) {
        args = arguments;
        savedThis = this;
        return;
      }

      f.apply(this, arguments);
      cooldown = true;

      setTimeout( function() {
        cooldown = false;
        if (args) {
          wrapper.apply(savedThis, args);
          savedThis = args = null;
        };
      }, ms);
    };
 }
