for(let vertical = 1; vertical <= 100; vertical++) {
	if(vertical % 3 == 0) {
		console.log("FIZZ");
	}else if(vertical % 5 == 0 && vertical % 3 != 0) {
		console.log("BUZZ");
	}

	if(vertical % 5 == 0 && vertical % 3 == 0) {
		console.log("FIZZBUZZ");
	}
}