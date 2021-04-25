var i;
var cars;
for (i = 0; i < cars.length; i++) {
  console.log()
}


//esegue un ciclo attraverso le proprietà di un oggetto
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}

//può anche scorrere le proprietà di un array
var numbers = [45, 4, 9, 16, 25];

var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x];
}