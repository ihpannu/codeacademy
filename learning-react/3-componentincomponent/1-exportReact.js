// export
// Alright! You've learned how to use import to grab a variable from a file other than the file that is currently executing.

// When you import a variable from a file that is not the current file, then an import statement isn't quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

// export comes from ES6's module system, just like import does. export and import are meant to be used together, and you rarely see one without the other.

// There are a few different ways to use export. In this course, we will be using a style called "named exports." Here's how named exports works:

// In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:

// // Manifestos.js:

export const faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};
You can export multiple things from the same file:

// Manifestos.js:

export const faveManifestos = {
  futurist: 'http://bit.ly/1lKuB2I',
  SCUM:     'http://bit.ly/1xWjvYc',
  cyborg:   'http://bit.ly/16sbeoI'
};

// export const alsoRan = 'TimeCube';
// In a different file, import the name of the var, let, const, function, or class from the first file:

// // App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
// This style of importing and exporting in JavaScript is known as "named exports." When you use named exports, you always need to wrap your imported names in curly braces, such as import { faveManifestos, alsoRan } from './Manifestos';.

// You can read more about named exports, and about JavaScript's module system in general, here.