//strings can be accessed as arrays, each charater is an index
let text = "Hello World!";
console.log(text.slice(2, 9));                       //print index 2-8

//Objects
let numOne = 1000;
let numTwo = Number('what');                        //sets numTwo var value as a number/integer, because its set as a number value you cannot set as a text string so value = NaN
let numThree = new Number(1000);                    //sets numThree var as an object with 1 number/integer value set as Number 1000
let numFour = String(1000);                         //sets numFour var value as a string, sets value as 1000 and converts to string

console.log(typeof numOne);                         //numOne is a number value
console.log(typeof numTwo);                         //numTwo is a number value
console.log(typeof numThree);                       //numThree is an object
console.log(typeof numFour);                        //numFour is a string

console.log(numOne);                                //NumOne has a number value of 1000
console.log(numTwo);                                //numTwo has a number value of NaN
console.log(numThree);                              //numThree is a object with a number value of 1000
console.log(numFour);                               //numFour is a string of '1000'

//.isNaN check if a object is a not number, if it is a number output false
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(0 / 0));
console.log(Number.isNaN(10));

//.isFinite checks if a object is finite, if true output true
console.log(Number.isFinite(0));
console.log(Number.isFinite(10));
console.log(Number.isFinite(Infinity));

//.isInterger checks if a object is a whole number, if true output true
console.log(Number.isInteger(0));
console.log(Number.isInteger('10'));
console.log(Number.isInteger(10.5));

//.toFixed rounds a number with a fixed ammount of decimal places
let num = 13.55123;
console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(3));
console.log((-13.55123).toFixed(3));

//.toLocalString formats a number to a diffrent language format
console.log((5316).toLocaleString('ar'));
console.log(('44453').toLocaleString('ar'));

//.toPrecision() can be used to round a number value to a set character count
console.log((123456).toPrecision(5));
console.log((5.5454).toPrecision(3));
console.log((50.5454).toPrecision(3));
console.log((500.5454).toPrecision(3));
console.log((5000.5454).toPrecision(3));

//.toString() converts a value, array or obj to a plain string representing its contents
//            toString outputs a base 16 string by default but this can be changed by changing the parameter 
let eg1 = { num1: 1, num2: 2, num3: 3};
let eg2 = (1, 2, 3);
let eg3 = '1, 2, 3';
let eg4 = 6;
console.log(eg1.toString());
console.log(eg2.toString());
console.log(eg3.toString())
console.log(eg4.toString(2))

//string formatting functions
let text1 = '           first-name      ';
let text2 = 'last-name';
let fullName = (text1.concat(" " + text2));

console.log(fullName);
//.toUpperCase() changes all characters of a string to capitals
console.log(fullName.toUpperCase());
//.trim() cuts out whitespace at the front and end of a string (quokka does this by default so you'll have to look at console output)
console.log(fullName.trim());

//.isNaN example
function func1 (x, y) {
    const result = Number.parseInt(x, y);
    if (Number.isNaN(result)) {
        return 0;
    }
    return result * 10;
}
console.log(func1('5', 10));

//diffrent functions
//named functions
function example1 (x) {console.log(x);};
example1('Im a Func');

let example2 = function (x) {console.log(x);};
example2('Im a Func');

//anonymous functions
(function (x) {console.log(x);})
    ('Im a Func too');

(x => {console.log(x);})
    ('So am I');

//callback or high order function
function callback1 (x) {
    console.log(x);
}

function callback2 (y) {
    y('dang i been called back');
}
callback2(callback1);
//^this runs callback2 with a argument of callback 1
//in callback 2 y = callback1 
//callback 2 runs "callback1('dang i been called back')"
//callback 1 is ran with an argument of 'dang i been called back'
//callback 1 prints "dang i been called back"

//making Objects
let myObject = {                                    //object formatting is simmilar to arrays but they use {} instead of []
    firstName: 'Ali',
    lastName: 'Kahwaji'
};
console.log(myObject);
//accessing properties of objects
console.log(myObject.lastName);
//adding or editing properties of objects
myObject.name = 'Muaz';                              //adds property 'name' with value of 'Muaz'
console.log(myObject.name);

//rules for objs
//Only use letters, digits, underscores
//Must start with a letter or underscore
//Names are case-sensitive
//Must not match a reserved keyword in JS

let students = {
    name: 'Luke',
    class: 'SDV503',
    school: 'NMIT'
};
//listing object properties
console.log(Object.keys(students));
//freezing objects
// Object.freeze(students)                          //this sets students object as read only
students.name = 'Phil';
console.log(students);
console.log(Object.isFrozen(students));

let anotherStudent = {
    studentName: 'Luke',
    otherClass: 'CSA',
    school: 'MIT'
};
//Object.assign() assigns an object cloned properties of the param object
let newObj = Object.assign(anotherStudent);
console.log(anotherStudent)
console.log(newObj);

anotherStudent = { noStudents: 'None '}
console.log(anotherStudent)
console.log(newObj)

//Object.create() sets an objects properties as anothers, as the others changes so does the assigned properties
let otherObj = {}
otherObj.something = { something: "gnihtemos" }
newObj = Object.create(otherObj);
console.log(otherObj.something)
console.log(newObj.something)

otherObj.something = { something: "something"}
console.log(otherObj.something)
console.log(newObj.something)

// Object.is() checks if an obj is the same as another, this can also be used to check if an object is frozen
let this1 = {
    one: 1,
    two: 3
};
let that1 = {
    one: 1,
    two: 2
};
let exObj = {};
Object.freeze(exObj);

console.log(Object.is(this1.one, that1.one));       //is this1.one the same as that1.one
console.log(Object.is(this1.two, that1.two));       // is this1.two the same as that1.two
console.log(Object.isFrozen(exObj));
console.log(Object.isExtensible(exObj));

