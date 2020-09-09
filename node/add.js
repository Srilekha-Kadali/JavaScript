function add(x,y){
    return x+y;
}

function fakeAddition(x,y){
    return x+y;
}

//TO import more number of functions:-
myName = "Srilekha";

module.exports = {
    add, fakeAddition, myName
}

//export your functions to other files as below:
//module.exports.addition=add;
//module.exports.fakeAddition = fakeAddition;

//You expose only those functions which you want 
//to show to other filesn

//recommended to maintain more number of small small codes
//than large code in a single file.

