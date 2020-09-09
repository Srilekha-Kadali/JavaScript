var users = [
    {
    name:"srilekha",
    age:22
},
{
    name:"sandhya",
    age:18
}];

var filMap = users.filter(function(item, index){
    return item.age>20
}).map(function(item, index){
    return {name:item.name}
});
console.log(filMap);