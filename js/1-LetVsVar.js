// ---------------------------------- Block scope ----------------------------------
function runBlockScope() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar); // Foo Bar

    {
        var moo = "Mooo"
        let baz = "Bazz";
        console.log(moo, baz); // Mooo Bazz
    }

    console.log(moo); // Mooo
    console.log(baz); // ReferenceError
}

// common mistake to declare variable with let inside if statement block and use it outside the block
function runCheckBiggerThanTen(number){
    if(number > 10){
        let flag = true
    }else{
        const difference = 10 - number
        console.log(`please add ${difference} to reach 10` )
    }

    console.log(flag)
}

// ---------------------------------- Hoisting ----------------------------------

function runHoisting() {
    console.log(foo); // undefined
    var foo = "Foo";
    console.log(foo); // Foo

    console.log(bar); // ReferenceError
    let bar = "Bar";
    console.log(bar); // Bar
}


// ---------------------------------- ReDeclaration ----------------------------------
// function runReDeclaration() {
//     var foo = "foo1";
//     var foo = "foo2"; // No problem, 'foo' is replaced.
//     console.log(foo)

//     let bar = "bar1";
//     let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
//     console.log(bar)
// }