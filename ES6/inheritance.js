class User{
    constructor(){
        this.firstName = "Srilekha";
        this.lastName = "Kadali";    
    }
    firstName;// = "Srilekha";
    lastName;// = "Kadali";
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

//No multiple inheritance in JS
class Student extends User{
    constructor(){
        super(); //super in JS in MANDATORY!
        //this.userName = "srikha";
    }
    userName = "Sandhya";
}

console.log(new Student());