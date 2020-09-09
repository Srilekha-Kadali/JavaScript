var a = "full";
//creating promise object
var x = new Promise(function (resolve, reject){ 
    if(a == 'full'){
        resolve();
    }
    else{
        reject();
    }
});

x.then(function(){
    console.log("Happy");
}).catch(function(){
    console.log("Sad");
});

console.log("Explanation");