var arr1 = [0,1,2,3,4,5,6,7,8,9,10] ;
var arr2 = new Array();
for(var  i = 0 ; i< arr1.length ; i++){
  if (arr1[i]%2==0){
      arr2.push(arr1[i])
     
    }
}
console.log(arr2);


var arr3 = [0,1,2,3,4,5,6,7,8,9,10];

function filtrare(arr3){
  return   arr3%2 == 0;
}
console.log(arr3.filter(filtrare));


var arr2= [12 , 23, 45, 2, 3, 67, 4, 3, 2];
 var a = 0;
for(var i = 0 ; i < arr2.length ; i++){

   
    a = a + arr2[i];
  
}
  console.log(a);