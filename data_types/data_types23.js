console.log(Math.random());   //restituisce un numero casuale tra o e 1

console.log(Math.floor(Math.random() * 100)); // restituisce un numero casuale tra 0 e 100

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; // funzione che restituisce un numero compreso tra un min e un max
  }
  console.log(getRndInteger(1,19 ));

  var d = new Date();
 d.setFullYear(2020); // fino all'anno 2020
 console.log(d);

 var m = new Date();
m.setMonth(11);
console.log(m);

var g = new Date();
g.setDate(15);
console.log(g);

var people = ["morena", "giada", "Alessia", "gabba"];
console.log(people.sort());