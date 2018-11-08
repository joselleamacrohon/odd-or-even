function getInput () {
	let input_number = Number(document.querySelector("#number-to-check").value);
	return input_number;
	
}


let btn_check_number = document.querySelector("#check-number");
btn_check_number.addEventListener("click", checkNumber);
	

function checkNumber () {
	let check = getInput() % 2;

	console.log(check);

	let display;

	switch(check) {
		case 0:
			display = "This number is Even.";
			break;
		case 1:
		case -1:
			display = "This number is Odd.";
			break;
		default:
			display = "error!";
			break;
	}

	document.querySelector("#answer-number").innerHTML = display;
}
