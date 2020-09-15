var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(evenNumbers);
console.log("----------------");
var evenNumbers = numbers.filter(function(x, index){
    //console.log(x);
    return (x%2==0);
});
console.log("----------------");
console.log(evenNumbers);