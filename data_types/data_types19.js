var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// il primo parametro indica in che poszione aggingere i valori , mentre il secondo parametro indica gli elemnti da eliminare

var fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits1);

var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(0, 1); 
console.log(fruits2);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);
// concatena gli array già esistenti

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren1 = arr1.concat(arr1, arr3);   
console.log(myChildren1);

var arr4 = ["Emil", "Tobias", "Linus"];
var myChildren2 = arr4.concat("Peter"); 
console.log(myChildren2);


var fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits5.slice(1);
console.log(citrus);
