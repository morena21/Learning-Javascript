var arr1 = ["giovanni", "mario" , 34, 100, "ciao", 45];  
var arr2= 0;

console.log(parseInt.arr1);
function filtrare(arr1){
    for(var i= 0 ; i < arr1.length ; i++){
    if(typeof arr1[i] == "string"){
        var j= 0;
        arr2[j] = arr1[i];
       j++;
    } 
    }
    return arr2[j];
}

console.log(filtrare(arr1));