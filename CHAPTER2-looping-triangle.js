var triangle = function(tr){
	var print = "#";
	while(print.length < tr){
		print +="#";
	}
	console.log(print);
};
for (var tr = 1; tr < 8; tr++){
	triangle(tr);
}
