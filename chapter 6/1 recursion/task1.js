function sumToLoop(n) {
	let sum = 0;

	for (let i = 1; i < n; i++) {
		sum += i;
	}

	return sum;
}

function sumToRecursion(n) {
	return (n == 1) ? 1 : n += sumToRecursion(n - 1);
}

function sumToProgression(n) {
	return (n == 1) ? 1 :
		(n > 1) ? (n * (n + 1) / 2) : 0;
}

