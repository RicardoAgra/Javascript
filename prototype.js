/****************************************************/
        console.log("\n** Object.create **");
/*                                                  */

/* Creating an object to be used as prototype */
var proto_object = {
    name : "Proto Object",
    method : function()
    { 
        console.log( "Method of " + this.name + "." );
    }
}

/* Create a new object with it's prototype pointing to 'proto_object' */
var created_obj = Object.create( proto_object );

created_obj.method();

/* Augment the prototype and call the methods on the previous instanciated object */
proto_object.agument = function(){ console.log( "Augmented method of " + this.name + "." ); }

created_obj.agument();

/* Updating 'created_obj's name variable */
created_obj.name = "Created Object";

created_obj.method();
created_obj.agument();




/****************************************************/
    console.log("\n** new FunctionConstructor **");
/*                                                  */

/* When this function is called with the 'new' key-word it will return a new object with it's prototype set to this function. */
function Constructor( name )
{
    this.name = name;
    this.method = function()
    { 
        console.log( "Method of " + this.name + "." );
    }
}

/* Creating a new object */
var newObj = new Constructor( "New Object" );

newObj.method();

/* Augmenting prototype after 'newObj' has been created */
Constructor.prototype.print = function(){ console.log( "Method on the prototype of " + this.name + "." ); }

newObj.print();




/****************************************************/
    console.log("\n** Object.setPrototypeOf **");
/*                                                  */

/* Creating an object to be used as prototype */
var proto_test_obj = {
    name : "Proto Test Object",
    method : function()
    {
        console.log( "Method of " + this.name + "." );
    }
};

/* Creating object that will inherit from 'proto_test_obj' */
var new_test_obj = {
    name : "New Test Object",
};

/* Assigning the prototype of an object */
Object.setPrototypeOf( new_test_obj,proto_test_obj );

new_test_obj.method();