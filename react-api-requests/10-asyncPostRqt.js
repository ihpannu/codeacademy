// Example 
async function getData() {
  try {
    let response = await fetch("https://api-to-call.com/endpoint", {
      method: "POST",
      body: JSON.stringify({ id: 200 })
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
}


// Full Function 


// Include data for accessing Google APIs
const apiKey = 'AIzaSyDt68Yxf4uStRD9jQHujqjb4nBKW_P5ehI'
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements
const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions


// Clear page and call AJAX functions
function expand() {
  $responseField.empty();
  expandUrl();
  return false;
};

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
};

async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try {
    let response = await fetch(urlToExpand);
    if(response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your expanded URL is </p><p>' + jsonResponse.longUrl+ '</p>');
return jsonResponse;
    }
  } catch (error) {
    console.log(error);
  }
}

async function shortenUrl() {
  const urlToShorten = $inputField.val();
  const urlWithKey = url + '?key=' + apiKey;
  
  try {
    let response = await fetch(urlWithKey, {
      method: 'POST',
      body: JSON.stringify({longUrl: urlToShorten}),
      headers: {
        "Content-type": "application/json"
      }
    });
    if(response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your shortened URL is </p><p>' + jsonResponse.id + '</p>');
return jsonResponse;
    }
    
  }
  catch(error) {
    console.log(error);
  }
}

$expandButton.click(expand);
$shortenButton.click(shorten);
