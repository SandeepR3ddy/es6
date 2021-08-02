let arr = [1,2,3,4,5];
function double(x)
{
    return 2*x;
}
let newArr = arr.map(double);
console.log(arr);
console.log(newArr);


function myMap(arr,f)
{
  let newA = [];
  for(let i = 0;i < arr.length;i++)
  {
     newA.push(double(arr[i]));
  } 
return newA;
}
console.log(myMap(arr,double));