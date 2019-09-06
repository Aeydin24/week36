/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Exercise 1

//Function Declaration
       //Observe: no return type, no type on parameters
//function add(n1, n2){
//   return n1 +n2;
//}
//
////Function Expression
//var sub = function(n1,n2){
//  return n1 - n2
//} 
//
////Callback example
//var cb = function(n1,n2, callback){
//  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
//};

// Exercise 2

// 1.
// console.log( add(1,2) )     // What will this print?
// Prints 3

// 2.
//console.log( add )          // What will it print and what does add represent?
// Prints the reference to the function

// 3.
//console.log( add(1,2,3) ) ; // What will it print
// prints 3 and doesnt use the number 3.

// 4.
//console.log( add(1) );	  // What will it print 
// NaN because n2 isnt defined.

// 5.
//console.log( cb(3,3,add) ); // What will it print
// will print result from the two numbers

// 6.
//console.log( cb(4,3,sub) ); // What will it print
// will again print the result from the two numbers

// 7.
//console.log(cb(3,3,add())); // What will it print (and what was the problem)
// Will print an error, since you didnt give add any arguments.

// 8.
//console.log(cb(3,"hh",add));// What will it print
// Will print: Result from the two numbers: 3+hh=3hh

// Exercise 3

//var cb = function (n1, n2, callback) {
//    try{
//    if(n1 === "number")
//        throw new Error('n1 is not defined or is not a number - try again');
//    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);    
//    } catch (e){
//        console.log(e.name + ': ' + e.message);
//    }     
//};

//var cb = function (n1, n2, callback) {
//    try{
//    if(callback === "function")
//        throw new Error('callback is undefined, or is not a number');
//    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);    
//    } catch (e){
//        console.log(e.name + ': ' + e.message);
//    }     
//};

// Exercise 4 & 5. - works.
//
//function division(n1, n2) {
//    return n1 / n2;
//}
//
//console.log(cb(3,2,division));

// Exercise 6.

//let array = ['Jørgen', 'Peter', 'Christian', 'Ib', 'Bo']
//
//const filterarray = array.filter(name => name.length <= 3);
//console.log(filterarray);

// Exercise 7.

//const bignamearray = array.map(name => name.toUpperCase());
//console.log(bignamearray);

// Exercise 8.

//let li = array.map(name => "<li>" + name + "</li>");
//li.unshift("<ul>");
//li.push("</ul>");
//console.log(li.join(""));

// Exercise 9. 

//var cars = [
//  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
//  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
//  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
//  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
//  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
//];

// filter for year

//const filteryear = cars.filter(car => car.year > 1999);
//console.log(filteryear);

// filter for all volvos

//const filterVolvo = cars.filter(car => car.make === 'Volvo');
//console.log(filterVolvo);

// filter for price

//const filterPrice = cars.filter(car => car.price < 5000);
//console.log(filterPrice);

// create SQL query:

//let sqlString = cars.map(sql => "INSERT INTO cars (id,year,make,sql.model,sql.price) VALUES ("+ sql.id + "," + sql.year+","+ sql.make+","+ sql.model+ ","+ sql.price+");");
//console.log(sqlString);

// Exercise 10
//     
//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

 a --> d --> f --> e --> b.
         
/* a string would be executed first for obvious reasons. Then b would be next but it has the biggest delay.
 * Because of that D would be next and B will automatically be last.
 * E has the next biggest delay so it will be just before b. f will print after d. */
 
 // Exercise 11
 
 //it was correct
 
 // Exercise 12
 
// function Person(name){
//  this.name = name;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  //Explain this
//  },2000);
//};

//call it like this (do it, even if you know it’s silly ;-)
//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this
/* This calls the Person first, 
 * then prints ("I'm global: "+ name)
 * then it prints ("Hi  "+ this.name) says Hi undefined
 * because the Person has been referred to in this method.
 */

//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ?


//var greeter = function(){
//  console.log(this.message);
//};
//var comp1 = { message: "Hello World" };
//var comp2 = { message: "Hi" };
//
//var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
//var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);

// this works.

// Exercise 13.

//let jsObj = {movie: "Braveheart", year: "2000", main actor: "Mel Gibson", length: "300"};
//
//var loop = function (obj) {
//    for (prop in obj) {
//        console.log(prop, obj[prop]);
//    }
//}
//console.log("With movie");
//loopObj(jsObj)
//console.log("No movie");

// Exercise 14.
// 
//let Person {
//
//    constructor(firstName, lastName, age) {
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.age = age;
//    }
//
//    get details() {
//        for (prop in Person) {
//            console.log(prop, obj[prop]);
//        }
//    }
//}










