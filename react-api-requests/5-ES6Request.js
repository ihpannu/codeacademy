// Include data for accessing Google APIs

const apiKey = '<Your API Key>';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#address');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try {
    let response = await fetch(urlToExpand);
    if (response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your expanded url is <p></p> ' + jsonResponse.longUrl + '</p>');
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

async function shortenUrl() {
  const urlToShorten = $inputField.val();
  let urlWithKey = url + `?key=` + apiKey;
  try {
    let response = await fetch(urlWithKey, {
      method: 'POST',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({longUrl: urlToShorten})
    });
    if (response.ok) {
      let jsonResponse = await response.json();
      $responseField.append('<p> Your shortened url is <p></p>' + jsonResponse.id + '</p>');
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}

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

// Call the functions when the appropriate button is clicked

$expandButton.click(expand);
$shortenButton.click(shorten);
