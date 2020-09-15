'use strict';
var getPrice=(count, tax)=>count*4.00*(1+tax);

console.log(getPrice(2,.07));