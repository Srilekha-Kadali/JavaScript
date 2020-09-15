// method of array which produces 
//same o/t of array but data can be manipulated.

var users = [
    {
    name:"srilekha",
    age:22
},
{
    name:"sandhya",
    age:18
}];
//array of objects 
//This is called Chaining of Functions: calling map from filter
var ageGreater20 = users.filter(function(item, index){
    return item.age>20;
});
//maps returns same amt of data in array;
var ages = users.map(function(item, index){
    //LHS age can be any variable you want to display in console
    return {age:item.age}
});

console.log(ages);