let arr = [1,2,3,4,5,6];
function sum(x,y)
{
    return x + y ;
}
let sumOfEle = arr.reduce(sum);
console.log(sumOfEle);