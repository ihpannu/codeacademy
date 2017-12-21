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