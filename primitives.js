/****************************************************/
        console.log("\n* Primitive Types *\n");
/*                                                  */

   /* Primitive type variables are passed by value, meaning a new copy of the
    * variable is created and stored in memory. The following are primitive types:
    * 
    * boolean
    * string
    * number
    * undefined
    * null ( NOTE :: typeOf( null ) === "object" ) 
    * */



    var original = 1;
    var copy = original;

    console.log( "Original: "+ original +", Copy: "+ copy ); // > Original: 1, Copy: 1

    
    
    copy = 2;
        
    console.log( "Original: "+ original +", Copy: "+ copy ); // > Original: 1, Copy: 2

    
    
    
    function changeValue( argument ) {

        console.log( "\nchangeValue argument's initial value: "+ argument );
        
        argument = 3;

        console.log( "changeValue value after reassignment: "+ argument );
    }

    changeValue( original ); // > changeValue argument's initial value: 1
                             // > changeValue value after reassignment: 3

    

    console.log( "\nOriginal after changeValue was called: "+ original ); // > Original after changeValue was called: 1