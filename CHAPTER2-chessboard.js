var space = " ";
var hash = "#";

function cheseboard(num){
  var result = [];
  for(var i = 1; i < num; i++){
    while(result.length < num){
      if(result.length%2 == 0){
      	var print = [" "];
      }else{
      	var print = ["#"];
      }
      while(print.length < num){
        if(print[print.length-1] == hash){
          print.push(space);
        }else{
          print.push(hash);
        }
      }
      print.push("\n");
      print = print.join("");
      result.push(print);
    }
  }
  console.log(result.join(""));
}

cheseboard(8);
