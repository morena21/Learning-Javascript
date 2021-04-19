var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.pop();  // rimuove l'ultimo elemento dall'array
console.log(fruits);


var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();  //la variabile x prnde l'ultimo valore dell'array
console.log(x);

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.push("Kiwi"); // aggiunge alla fine dell'array kiwi
console.log(fruits1);

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
var y = fruits2.push("Kiwi");
console.log(y);               // restituisce la nuova lunghezza dell'array

var fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3[0] = "Kiwi";          // sostituisce il campo zero con kiwi
console.log(fruits3);  

var fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4[fruits4.length] = "Kiwi";     // aggiunge un elemento
console.log(fruits4);



var fruits5 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits5[0]; 
console.log(fruits5);