let arr = [1,2,3,4,5];
function isEven(x)
{
    return (x % 2 == 0) ;
}
let newArr = arr.filter(isEven);
console.log(arr);
console.log(newArr);

function myMap(arr,f)
{
  let newA = [];
  for(let i = 0;i < arr.length;i++)
  {
      if(isEven(arr[i]))
      {
       newA.push(arr[i]);
      } 
}
return newA;
}
console.log(myMap(arr,isEven));
