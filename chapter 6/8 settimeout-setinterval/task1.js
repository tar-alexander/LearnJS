function printNumbers(from, to) {
	let i = from;
	setTimeout(function run() {
		if (i <= to) {
			alert(i++);
			setTimeout(run, 1000);
		}
	}, 1000)
}

function printNumbersInterval(from, to) {
	let i = from;

	let interval = setInterval(function() {
		alert(i++);
		if (i > to ) {
		clearInterval(interval);
		}
	}, 1000);
}