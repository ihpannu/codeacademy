async function expandUrl() {
  const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
  try {
    let response = await fetch(urlToExpand);
    if(response.ok) {
      let jsonResponse = await response.json();
    }
  } catch (error) {
    console.log(error);
  }
}
