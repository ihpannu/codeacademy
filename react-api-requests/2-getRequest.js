// XHR GET Requests I When AJAX was first formalized by the World Wide Web
// Consortium in 2006, it required the use of an XMLHttpRequest object, a
// JavaScript object that is used to retrieve data.There are several steps to
// creating an AJAX request using an XMLHttpRequest, or XHR, object.Let 's
// explore the diagram to the right, which displays the boilerplate code for a
// ma' +   'king a GET request using an XHR object.' On the first line, we
// create an XMLHttpRequest object.We do   that by typing new,   then the type
// of object,   XMLHttpRequest().This is called the new operator.The object is
// saved in a const called xhr.Throughout this request,     we 'll be accessing
// properties of this object. On the next line, we save the URL to which we 're
// going to make our request in a const called url. We set the responseType of
// the xhr object to 'json'.There are other possible response types, which you
// can read about here.onreadystatechange is an event handler that is called
// whenever the value of the readyState property changes.We set it equal to an
// anonymous function.This function will handle the response to our
// request.First, we check if the readyState of our xhr object is equal to
// XMLHttpRequest.DONE.If that evaluates to true, the code in the block
// executes.It is useful while writing a new program to log the response to the
// console so that you can see its structure.Later, you might change this
// function to add parts of the response to your web page or do   something else
//     with it entirely.Then,     we call the.open()method on our xhr object and
// pass it two arguments - 'GET' (the type of request)and url,     the URL we
// 're querying. .open() creates and structures the request. It tells the request
// wh' +       'at method to use, GET or POST, and what URL to query.' Finally,
// we call the.send()method on our xhr object and pass it no arguments   .This
// is because data sent in GET requests is sent as part of the URL   .Calling
// the   .send()method sends the xhr object with its relevant information to the
// API URL   .