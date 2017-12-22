// Include data for accessing Google APIs

const apiKey = '<Your API Key>';
const url = 'https://www.googleapis.com/urlshortener/v1/url';

// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');

// AJAX functions

function expandUrl() {
  const urlToExpand = url + '?key=' + apiKey + '&shortUrl=' + $inputField.val();
  $.ajax({
    url: urlToExpand,
    type: 'GET',
    dataType: 'json',
    success(response) {
      $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');
    },
    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
}

function shortenUrl() {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = $inputField.val();
  $.ajax({
    url: urlWithKey,
    type: 'POST',
    data: JSON.stringify({longUrl: urlToShorten}),
    dataType: 'json',
    contentType: 'application/json',
    success(response) {
      $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');
    },

    error(jqXHR, status, errorThrown) {
      console.log(jqXHR);
    }
  });
}

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

// Call functions on submit

$expandButton.click(expand);
$shortenButton.click(shorten);

// BoilerPlate

const xhr = new XMLHttpRequest;
const url = 'https://api-to-call.com/endpoint';

const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
  }
};

xhr.open('POST', url);
xhr.send(data);

// USING JQUERY

$.ajax({
  url: 'https://api-to-call.com/endpoint',
  type: 'POST',
  data: JSON.stringify({id: 200}),
  dataType: 'json',
  success(response) {
    console.log(response);
  },

  error(jqXHR, status, errorThrown) {
    console.log(jqXHR);
  }
});

fetch('https://api-to-call.com/endpoint').then(success(response => {
  if () 
  }
))