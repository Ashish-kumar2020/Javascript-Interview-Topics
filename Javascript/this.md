## this Keyword

# In Global space : 
  this is equla to global and window object

# Note : this keyword works differently in strict mode and in non-strict mode

# How this works inside function scope : 

function x(){
  console.log(this); // the value of this depends on strict and non-strict mode
  // if we are in non-strict mode then the value of this keyword would be window.
  // if we are in strict mode then the value of this keyword is undefined.
}
x();

# this substitution : 
  if the value of this is undefined or null this will be replaced with Global object only in non-strict mode.

# What is the value of this keyword inside function in non-strict mode?
the value of this keyword inside a function is undefined but we have a this subsitution so the value becomes window object.

# Note : the value of this inside a function depends on the mmode [strict mode or non-strict mode]

For non-strict mode : this => window object [due to this subsitution]

For strict mode ; this => undefined

# Note ; If we make a function as a part of object then it is known as method.

# Note : The value of this depends on how function is called.

"use strict"

function x(){
  console.log(this)
}
x() // undefined
window.x() // window 

window.x() => when a function is executed as a method of an object[using dot notation like object.method()], this keyword is always bound to the object to the left of the dot.

# this keyword inside a Object's method

const obj {
  a : 10,
  x : function(){
    console.log(this),
  }
};

obj.x();  // the value of this keyword would be the obj from where it is called
Output :
 {a:10 x: function(){}}


# Using call, apply and bind methods [sharing methods] :

const student = {
  name : "Ashish",
  printName : function(){
    console.log(this.name),
  },
};
student.printName() // Ashish

const student2 {
  name : "Singh"
}

student.printFullName.call(student2); // Singh

In above scenerio student2 refers to the object whose value we want to print.

# How does this behave in case of Arrow Function

Arrow Function does not have their this they take the value of their lexical environemnt where they are enclosed.

const obj = {
  a : 10,
  x : () => {
    console.log(this), // global object / window object
  }
},

obj.x(); // this will be pointing to its enclosed lexical space which is global.

 # Note : Since Arrow function does not have their own this keyword so they will check in thier outer enclosed lexical context.

 # this keyword inside a nested arrow function

 const obj2 = {
  a ; 20,
  x : function () {
    const y = () => {
      console.log(this);
    }
    y();
  }
 }

 obj2.x();

 Since Arrow function does not have their own this so it iwll try to get the value of this in its enclosed lexical scope so this will be similar to below implementation

 const obj2 = {
  a: 20,
  x: console.log(this);
 }

 so output will be the obj2


 # this inside DOM Element

 this value of his will be refrenece to the HTML Element

 <button onClick="alert(this)">Click Me</button>

 this will refere to the HTML Element i.e Button