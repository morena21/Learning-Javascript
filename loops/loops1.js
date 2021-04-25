// while
var i = 0 ;
while (i < 10) {
   console.log("ciao sono ancora nel ciclo");
    i++;
  }

  // a differenza del while il do while Il do/whileciclo è una variante del ciclo while. Questo ciclo eseguirà il blocco di codice una volta, prima di verificare se la condizione è vera, quindi ripeterà il ciclo finché la condizione è vera.
  var i = 0 ;
  do {
   console.log("sto nel ciclo");
    i++;
  }
  while (i < 10);

  // brack viene usata per saltare fuori da un ciclo
  for (var i = 0; i < 10; i++) {
    if (i === 3) { break; }
    console.log("sono prima del tre");
  }

  // continue salta il ciclo la cui condizione nell'if è verificata
  for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    console.log("continue");
  }
