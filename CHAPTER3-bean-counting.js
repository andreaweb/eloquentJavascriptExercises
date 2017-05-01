function countBs(str){
	var result = 0;
  	for(var i = 0; i < str.length; i++){
    	if(str.charAt(i) == "B"){
        	result++;
        }
    }
  	return result;
}

function countChar(str, letter){
	var result = 0;
  	for(var i = 0; i < str.length; i++){
    	if(str.charAt(i) == letter){
        	result++;
        }
    }
  	return result;
}