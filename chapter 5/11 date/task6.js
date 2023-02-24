function getSecondsToday() {
	let now = new Date();
	let start = new Date(now);
	start.setHours(0,0,0,0);

	return Math.round((now.getTime() - start.getTime()) / 1000);
}

function getSecondsToday() {
	let now = new Date();
	return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
}