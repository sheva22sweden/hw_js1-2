	function pow(x, n) {

		var result = x;

		for (var i = 1; i < n; i++) {
			result *= x;
		}

		return result;
	}

	var x = prompt("x?", '');
	var n = prompt("n?", '');

	if (n <= 0 ) {
		alert('Enter the correct number, Please');
	} else {

		alert(pow(x, n));
	}

	console.log(pow(x, n));