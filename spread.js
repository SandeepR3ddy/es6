let arr = [1,2,4,5];
let b = [1,2];
let res = [...arr.slice(0,2),3,...arr.slice(2)];
console.log(res);
let spreadArr = [...arr,...b];
console.log(spreadArr);
let obj1 = {
    a:1,
    b:2
}
let obj2 = {
    c:3,
    d:4
}
let obj3 = {...obj1,...obj2};
let obj4 = {...obj1,...obj2,...obj1,...obj2};
console.log(obj3);
console.log(obj4);