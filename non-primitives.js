/****************************************************/
console.log("\n\n* Non-Primitive Types *\n");
/*                                                  */

   /* Non-primitive types are passed by reference. Only a pointer 
    * to the memory location of the value is passed. In this case, both
    * instances share the memory register. Modificatios to one will be
    * reflected in the other. The following are non-primitive types:
    * 
    * Object
    * Function
    * */

    var objOne = { name: "Object One" }
    var objTwo = objOne;

        objTwo.name = "Object Two";

    console.log( objOne );
    console.log( objTwo );