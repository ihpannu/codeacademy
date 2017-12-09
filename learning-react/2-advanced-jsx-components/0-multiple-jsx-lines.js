// Use Multiline JSX in a Component
// In this lesson, you will learn some common ways that JSX and React components work together. 
// You'll get more comfortable with both JSX and components, while picking up some new tricks.

// Take a look at this HTML:

<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="http://bit.ly/1WGzM4G">
      Douglas Huebler
    </a>
  </cite>
</blockquote>

// How might you make a React component that renders this HTML?

// Select QuoteMaker.js to see one way of doing it.

// The key thing to notice in QuoteMaker is the parentheses in the return statement, 
// on lines 6 and 18. Until now, your render function return statements have looked like this, 
// without any parentheses:

// return <h1>Hello world</h1>;
// However, a multi-line JSX expression should always be wrapped in parentheses! 
// That is why QuoteMaker's return statement has parentheses around it.
// 1.
// Here's another quote, formatted in the same way:

<blockquote>
  <p>
    What is important now is to recover our senses.
  </p>
  <cite>
    <a target="_blank" 
      href="http://bit.ly/1LvSLUA">
      Susan Sontag
    </a>
  </cite>
</blockquote>


// Use QuoteMaker.js as a guide! Remember to import React and ReactDOM at the top of the 
// file, and remember to ReactDOM.render() your component at the bottom of the file.

