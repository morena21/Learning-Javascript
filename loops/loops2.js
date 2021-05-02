var a=[1,45,78,43,2,3,4,6,7,8,10];
var b=[2,4,6,7,11,3,9,1,12,14];

function arrayDiff(a = [], b = []) {
  for(var i = 0;i< a.length;i++){
      for(var j= 0;j< b.length; j++){
          if (a[i] == b[j]){
             a.splice(i, 1);
          }
      }
  }
  return  a;
}

console.log(arrayDiff(a,b));

console.log(parseInt.arr1);