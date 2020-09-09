var users = [
    {
    name:"srilekha",
    age:22
},
{
    name:"sandhya",
    age:18
}];

console.log(users[0],"\n",users[1]);
//console.log("Printing objects of age greater than 20");
var ageGreater20 = users.filter(function(item, index){
    return item.age>20;
});
console.log(ageGreater20);