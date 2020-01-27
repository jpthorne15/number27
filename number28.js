console.log("This is before the function definition");

function sayYourName() {
    console.log("sayMyName has spoken");
}

console.log("This is after the function definition")

sayYourName();
// This function can be called multiple times as shown below
// Expected result "sayMyName has spoken"

sayYourName();
sayYourName();
sayYourName();

// The console log in function body will print out 3 times

// The function body can have as many statements as desired
// The function can then be called multiple times
function sayMyName () {
    console.log ("Statement 1 executed");
    console.log ("Statement 2 executed");
    console.log ("Statement 3 executed");
    console.log ("Statement 4 executed");
}

sayMyName ();
sayMyName ();
sayMyName ();

/* Expected result: All 4 statements in function body executed three times
over for a total of 12 repititions*/



