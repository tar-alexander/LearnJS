Function.prototype.defer = function(ms) {
	let f = this;
	return function() {
		setTimeout(() => f.apply(this, arguments), ms)
	}
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); 