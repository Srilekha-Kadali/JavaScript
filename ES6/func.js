function check(){
    console.log("Heyy");
    console.log(arguments[0]+arguments[1]);
}

check(10,20);

function withOnePara(a){
    console.log(a+" | "+arguments[1]+" | "+arguments[2]);
}

withOnePara(10,20);