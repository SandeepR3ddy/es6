let arr = [1,2,4,5];
let b = [1,2];
let res = [...arr.slice(0,2),3,...arr.slice(2)];
console.log(res);
let spreadArr = [...arr,...b];
console.log(spreadArr);