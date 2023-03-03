let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseListLoop(list) {
	let tmp = list;
	let array = []

	while (tmp) {
		array.push(tmp.value);
		tmp = tmp.next;
	}

	for (let i = array.length - 1; i >= 0; i--) {
		alert(array[i]);
	}
}

function printReverseListRecursive(list) {
	if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}