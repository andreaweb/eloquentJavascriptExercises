function reverseArray(arr){
  var newArr = [];
  for(var i = 1; i < arr.length+1; i++){
 	newArr.push(arr[arr.length-i]);
 }
  return newArr;
}

function reverseArrayInPlace(arr){
 var meio = Math.floor(arr.length/2);
 //precisei olhar as dicas e elas sugeriram trocar os elementos da array de lugar, exceto o do meio, que ficaria no meio de toda forma
 //a var meio encontra essa metade
  var i = 0;
 while(i<meio){
   //depois fazemos um loop, a primeira parte diz onde vamos mexer na array
   //o sinal de menos significa que contamos a partir do fim da array
   //em seguida o 1 significa que um item será removido
   //e arr[i] é o item que será adicionado. ou seja, o loop funciona assim:
   //i = 0 pra começar (menor que o meio), então o primeiro elemento do loop
   //arr[i] é o elemento que deve ser trocado com o elemento do final, o que
   //ocorre porque ele está em ambos os lados da função (antes do igual e depois)
   //a mesma lógica ocorre com os outros elementos à medida que i incrementa
  arr[i] = arr.splice(-(i+1), 1, arr[i])[0];
  i++; 
 }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
