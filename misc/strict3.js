'use strict';
let updateF=[];
for(var i=0;i<2;i++){
    updateF.push(function() {return i;});
}
console.log(updateF[0]());