let text = "Hello World!";
console.log(text[2]);
let number = 8;
console.log(number);
number = 8.9;
console.log(number);

console.log((5.4454).toPrecision(3));

function func1 (x, y) {
    const result = Number.parseInt(x, y);
    if (Number.isNaN(result)) {
        return 0;
    }
    return result * 10;
}

console.log(func1('5', 10));

let numOne = 1000;
let numTwo = Number('what');
let numThree = new Number(1000);
let numFour = String(1000);

console.log(typeof numOne);
console.log(typeof numTwo);
console.log(typeof numThree);
console.log(typeof numFour);

console.log(numOne);
console.log(numTwo);
console.log(numThree);
console.log(numFour);

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
//.toFixed formats a number with a fixed ammount of decimal places
let num = 13.55123;
console.log(num.toFixed());
console.log(num.toFixed(1));
console.log(num.toFixed(3));
console.log((-13.55123).toFixed(3));
//.toLocalString formats a number to a diffrent language format
console.log((5316).toLocaleString('ar'));
console.log(('44453').toLocaleString('ar'));


function example1 (x) {console.log(x);};
example1('Im a Func');

let example2 = function (x) {console.log(x);};
example2('Im a Func');

(function (x) {console.log(x);})
    ('Im a Func too');

(x => {console.log(x);})
    ('So am I');;

//callback functions
function callback1(x) {
    console.log(x);
}
function callback2(y) {
    let x = 'dang i been called back'
    y(x)
}
callback2(callback1)

console.log("Hello World".length)

let text1 = '           first-name      '
let text2 = 'last-name'
let fullName = (text1.concat(" " + text2))

console.log(fullName)
console.log(fullName.toUpperCase())
console.log(text1.trim())

let stringObj = new String('String')
console.log(stringObj)

let backToString = stringObj.toString()
console.log(backToString)