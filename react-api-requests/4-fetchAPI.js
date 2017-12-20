  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
