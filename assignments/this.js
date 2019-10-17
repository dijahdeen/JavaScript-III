/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding: when 'this' is defined in the global scope, it can be used anywhere within your code.
* 2. Implicit binding: when it's pointing to something inside the object.
* 3. New Binding: a new function is created within an object.
* 4. explicit Binding: when .call, .apply, or .bind is used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function saysHi() {
    console.log(this.myName);
}
myName = "Dijah";
saysHi();

// Principle 2

// code example for Implicit Binding
let cat = {
    name: 'Peppers',
    sound: 'Meow',
    cats: function () {
        console.log(this.sound);
    }
}

cat.cats();

// Principle 3

// code example for New Binding



// Principle 4

// code example for Explicit Binding

function same() {
    console.log(this.antonym);
}

let Thesame = {
    synonym: 'similar',
    antonym: 'different'
}
same.call(Thesame);