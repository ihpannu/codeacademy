// HTTP Requests
// AJAX involves requesting data over the web,
// which is done using HTTP Requests.There are four commonly used types of HTTP requests - GET,
// POST,
// PUT,
// and DELETE.In this lesson,
// we 'll only be writing GET and POST requests. GET requests receive information from ' +
//   'other sites by sending a query. POST requests can change information on another ' +
//     'site and will receive information or data in response.'
// There are several differences between the way GET and POST requests are made.A GET request is like a search.If you navigate to Google and search for something, you might notice that all of your search terms are added to the URL,
// like this : https : //www.google.com/#q=pizza+near+union+square
// This URL is saying "Google, please retrieve a list of pizza near Union Square." It is not introducing any new information to Google.POST requests,
// on the other hand,
// introduce new information to another website.Instead of sending this information in the URL of the request,
// it is sent as part of the body of the request.You will see what this looks like in later exercises.

// GET

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('GET', url);
xhr.send();

// POST

const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};
xhr.open('POST', url);
xhr.send(data);
