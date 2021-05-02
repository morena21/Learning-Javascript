var arr1 = [3,"andrea","giovanni", "mario", "giorgio",34, 100, "ciao", 45,"alessandra", "paola", 56];  
var arr2= 0;


function filtrare(arr1 = []){
    for(var i = 0 ; i < arr1.length ; i++){
        var tipo = typeof (arr1[i]);
    if(tipo == "string"){
        arr1.splice(i,1);
        
      }
      
    }
    return arr1;
}

console.log(filtrare(arr1));