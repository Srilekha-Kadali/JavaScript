//ES6 introduces concept of classes
//NO access modifiers
class User{
    //if you don't mention constr. explicitly, 
    //JS will consider it's default constructor.
    //constructor(fname, lname){
        //this.firstName = fname;//"Srilekha";
        //this.lastName = lname;//"Kadali";
    //}
    firstName;
    lastName;
    //firstName = "Srilekha";
    //lastName = "Kadali";
    //method; function keyword in not allowed in a class!
    getFullName(){
        return this.firstName + " " + this.lastName;
        //return arguments[0]+" "+arguments[1];
    }
}

var un = new User();//"Srilekha", "Kadali");
console.log(un.getFullName());
//console.log(un.getFullName("Sri","Lekha"));
console.log(un);

//In JS, parameters are ALWAYS optional!