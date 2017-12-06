function isArgTrue( arg ) 
{
    if( arg )
        return true;
    else
        return false;
}




/****************************************************/
        console.log("\n* Primitive Types *\n");
/*                                                  */

    /* Primitive variable types, listed bellow, are passed by value.
     * That means that when a function recives an argument of a 
     * primitive type, it will clone its value and store it in
     * a diferent memory slot. Changes to the function argument
     * won't affect the original. 
     * They also have a logical. */


console.log( "* TYPE *\t* VALUE *\t * LOGICAL VALUE *" );
     



    /* Javascript contains two logical values: true and false. */

var boolean_true = true;
console.log( "> "+ typeof( boolean_true ) +"\t "+ boolean_true +"\t\t "+ isArgTrue( boolean_true ) );


var boolean_false = false;
console.log( "> "+ typeof( boolean_false ) +"\t "+ boolean_false +"\t\t "+ isArgTrue( boolean_false ) );




    /* All strings are truthy, exept for the empty string. */

var string = "hello world";
console.log( "> "+ typeof( string ) +"\t "+ string +"\t "+ isArgTrue( string ) );


var emptyString = "";
console.log( "> "+ typeof( emptyString ) +"\t "+ emptyString +"\t\t "+ isArgTrue( emptyString ) );




    /* All numbers are truthy, except for the value 0 ( zero ) and 
     * NaN ( Not a Number ). Despite its name, NaN is of type
     * number. It is the result of an invalid mathematical operation,
     * such as dividing zero by zero ( 0/0 ). */

var number = 3.14;
console.log( "> "+ typeof( number ) +"\t "+ number +"\t\t "+ isArgTrue( number ) );


var zero = 0;
console.log( "> "+ typeof( zero ) +"\t "+ zero +"\t\t "+ isArgTrue( zero ) );


var infinity = Infinity;
console.log( "> "+ typeof( infinity ) +"\t "+ infinity +"\t "+ isArgTrue( infinity ) );


var minusInfinity = -Infinity;
console.log( "> "+ typeof( minusInfinity ) +"\t "+ minusInfinity +"\t "+ isArgTrue( minusInfinity ) );


var NotaNumber = NaN;
console.log( "> "+ typeof( NotaNumber ) + "\t "+ NotaNumber +"\t\t "+ isArgTrue( NotaNumber ) );




    /* 'undefined' is a special value for variables that were declared but
     * not initializated with a value. */

var UNDEFINED;
console.log( "> "+ typeof( UNDEFINED ) + "\t "+ UNDEFINED +"\t "+ isArgTrue( UNDEFINED ) );


    

var NULL = null;
console.log( "> "+ typeof( NULL ) + "\t "+ NULL +"\t\t "+ isArgTrue( NULL ) );

( function isNullPassedByReference( NULL )
    {
            console.log( "NULL was passed as " + NULL );

            NULL = "new value";

            console.log( "NULL was assigned as " + NULL );

    }
) ( UNDEFINED );

console.log( "NULL is still " + UNDEFINED );