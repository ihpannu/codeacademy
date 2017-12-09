// Event Listeners in JSX
// JSX elements can have event listeners, just like HTML elements can.Programming in React means 
// constantly working with event listeners.

// You create an event listener by giving a JSX element a special attribute.Here's an example:

< img onClick = { myFunc } //>
// An event listener attribute's name should be something like onClick or onMouseOver: the 
// word on, plus the type of event that you're listening for.
// You can see a list of valid event names here.

// An event listener attribute's value should be a function. The above example would only work if myFunc 
// were a valid function that had been defined elsewhere:

function myFunc() {
    alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
// Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover.In JSX, 
// event listener names are written in camelCase, such as onClick or onMouseOver.