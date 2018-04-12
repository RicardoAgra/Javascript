/********************************************************/
        console.log( "\n** The 'this' key word **" );
/*                                                      */

   /* The 'this' keyword is always defined. Every function gets it's own
    * definition of the variable 'this'. So, What 'this' refers to depends 
    * of the execution context( where the function is called from ). */

this.name = "Local Object";

console.log( "File's execution context this: "+ this.name ); // > File's execution context this: Local Object


function functionStatment() {
    this.name = "Global Object";

    console.log( "Function Statment's this: "+ this.name );
}
functionStatment(); // > Function Statment's this: Global Object


var functionExpression = function() {
    console.log( "Function Expressions's this: "+ this.name );
    
}
functionExpression(); // > Function Expressions's this: Global Object




   /* If the function is inside an object, it's lexical context
    * is that object. So, the this keyword points to that object. */

var anObject = {
    name: "anObject",
    method: function() {
        console.log( "\n\nObject method this: "+ this.name ); // > Object method this: anObject
    },
    run: function() {
        this.method();
    }
}

anObject.run();




   /* Even if a function is declared inside an object, the this keyword 
    * doesn't always point to the object that contains the function. */

var anObjectMethod = anObject.method;

anObjectMethod(); // > Object method this: Global Object

var anObjectClone = anObject;

    anObjectClone.name = "anObjectClone";

    anObjectClone.run(); // > Object method this: anObjectClone





   /* When a function is declared inside another function,
    * the this keyword is reassined to point to the global object. */

var anotherObject = {
    name: "anotherObject",
    
    method: function() {
        
        function secondLevelFunctionDeclaration () {
            console.log( "\n\nSecond Level Function's this: "+ this.name ); 
        }

        var secondLevelFunctionExpression = function() {
            console.log( "Second Level Function's this: "+ this.name ); 
        }

        secondLevelFunctionDeclaration(); // > Second Level Function's this: Global Object
        secondLevelFunctionExpression(); // > Second Level Function's this: Global Object
    }
}

anotherObject.method();




    /* Due to prototype inheritace, the 'this' keyword reference can change. */

var anObjectHeir = Object.create( anObject );

anObjectHeir.name = "anObjectHeir";

anObjectHeir.run(); // > Object method this: anObjectHeir




   /* In ES6( ECMAScript® 2015 ), it is possible to assign a function's 'this' variable 
    * with Function.bind, Function.call and Function.apply. */

console.log( "\n" );

var aFunction = function() {
    console.log( "Ecmascript 2015: "+ this.name );
}

aFunction.call( { name: "Call" } ); // > Ecmascript 2015: Bind

aFunction.apply( { name: "Apply" } ); // > Ecmascript 2015: Apply

var bindFunction = aFunction.bind( { name: "Bind" } );

bindFunction(); // > Ecmascript 2015: Bind