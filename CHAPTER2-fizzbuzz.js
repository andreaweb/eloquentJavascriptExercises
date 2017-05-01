for(var numb = 1; numb < 100; numb++){
	if (numb % 3 === 0 && numb % 5 === 0){
		console.log("FizzBuzz");
	}else if(numb % 3 === 0){
		console.log("Fizz");
	}else if(numb % 5 === 0){
		console.log("Buzz");
	}else{
		console.log(numb);
	}
}
