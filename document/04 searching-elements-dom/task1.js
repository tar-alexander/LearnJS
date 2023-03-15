let table = document.getElementById("age-table");

let labels = document.querySelectorAll("label");

let firstTd = table.querySelector("td");

function findFormSearch() {
	let forms = document.querySelectorAll("form");

	for (let form of forms) {
		if (form.matches('form[name="search"]')) {
			return form;
		}
	}

	return null;
}

let form = findFormSearch();

let firstInput = form.querySelector("input");

let inputs = formSearch.querySelectorAll("input");
let lastInput = inputs[inputs.length - 1];