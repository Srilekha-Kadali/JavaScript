//Parameters to promise constructor = function with 2 parameters, resolve, reject

var condition = 'positive';
var promise = new Promise(function(resolve, reject){
    if(condition == 'positive'){
        resolve("I'm Good!");
    }
    else{
        reject("I'm Bad!");
    }
});

promise.then(function(response){
    console.log(response);
})
.catch(function(errorResponse){
    console.log(errorResponse);
})