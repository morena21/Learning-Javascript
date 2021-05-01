hello = function() {
    return "Hello World!";
  }

  hello = () => {                               // VIENE UTILIZZATA LA FRECCIA PER ACCORCIARE
     return "Hello World!";
  }


  hello = () => "Hello World!"; //Se la funzione ha una sola istruzione e l'istruzione restituisce un valore, è possibile rimuovere le parentesi e la return


var arr2=[2,3,4,5,6,7,8,9];

    for (var j = 0 ; j < arr2.length ; j++){
        if(arr2[j]<= 4){
            var quad = arr2[j]*arr2[j];
            console.log(quad);
        }
        else{
            console.log("termina elaborazione");
        }
    }
    
