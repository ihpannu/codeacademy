// Create a Component Class
// You've learned that a React component is a small, reusable chunk of code that is responsible for one job, 
// which often involves rendering HTML.

// Here's another fact about components: every component must come from a component class.

// A component class is like a factory that creates components.If you have a component class, 
// then you can use that class to produce as many components as you want.

// To make a component class, you use a base class from the React library: React.Component.

// What is React.Component, and how do you use it to make a component class?

// React.Component is a JavaScript class.To create your own component class, you must subclass 
// React.Component.You can do this by using the syntax class YourComponentNameGoesHere 

class extends React.Component { }


// JavaScript classes and subclassing are a complex topic beyond the scope of this course.
// If you aren't comfortable with them, here are some good resources to consult: 1 2 3 4.

// Look at the code in app.js.A lot it is still unfamiliar, but you can understand more than 
// you could before!

// On line 4, you know that you are declaring a new component class, which is like a factory 
// for building React components.You know that React.Component is a class, which you must subclass 
// in order to create a component class of your own.You also know that React.Component is a property 
// on the object which was returned by import React from 'react' on line 1.

// Name a Component Class
// Good! Subclassing React.Component is the way to declare a new component class.

// When you declare a new component class, you need to give that component class a name.On line 4, notice that our component class's name is MyComponentClass.

// Component class variable names must begin with capital letters!

// This adheres to JavaScript's class syntax. It also adheres to a broader programming convention in which class names are written in UpperCamelCase.

// In addition, there is a React - specific reason why component class names must always be capitalized.We'll get to that soon!