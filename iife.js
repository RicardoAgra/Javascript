/**********************************************************************/
    console.log( "\n\n * Imidiatly Invoked Function Expressions * " );
/*                                                                    */

( function()
    {
        var local_variable = "IIFE Variable";

        /* This pattern allows you to wrap your code in a function
         * allowing you to declare variables that are scoped to this function
         * and not to the global space. */
        
        console.log( "\n"+ local_variable +"\n" );

    }
) (); /* Close the parentisis that wrap the ( 'function(){}' ) expression, 
       * then invoke the function with '()' */

        
        // console.log( local_variable );

         /* Since the variable is declared inside the IIFE statement, it can not be accessed
         * outside the IIFE. If you try to log the variable outside the IIFE, you will get
         * an error since the variable isn't declared there. */



/*********************************************************************************/
console.log( "\n * IIFE's can be passed variables as any other functions * \n" );
/*                                                                               */

var global_variable = "Global Variable";

( function( external_argument )
    {
        var global_variable = "IFFE scoped !";

        /* Since variables have function scope, the global_variable name while
         * shared by both variables will not cause a colision. You can access both
         * inside the IIFE statment. 
         * 
         * Notice that we can rename the arguments passed. */

        console.log( "> "+ external_argument );
        console.log( "> "+ global_variable );

        
    }
) ( global_variable );




/*****************************************************************/
console.log( "\n * IIFE's can access it's father's scope * \n" );
/*                                                               */

var grandpa = "Grandfather's Variable";

( function( )
    {
        var papa = "Father's Variable";
        /* Consider that all functions live ( are hosted ) inside other functions. In
         * most usual cases, that function is the global space. Other times, 
         * it can be other functions.
         * 
         * Functions can look for variables by going up the family tree and reaching to
         * their father's scope, their father's father scope, and so one. But they can not
         * access their children's scope.
         * 
         * Notice that we can rename the arguments passed. */

        ( function( )
            { 
                var child = "Child's Variable";

                console.log( "> "+ papa )
                console.log( "> "+ grandpa );
            }
        )();
    }

    // console.log( "> "child );

    /* This won't work because child is not declared in this scope. Functions can not
     * access their children's variables. */

) ( );