function fibRecursive(n) {
	return (n <= 1) ? n :
		fib(n - 1) + fib(n - 2);
}

function fib (n) {
	let a = 0;
	let b = 1;

	for (let i = 2; i <= n; i++) {
		let c = a + b;
		a = b;
		b = c;
	}

	return b;
}