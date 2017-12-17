const jokes = require('./jokes');

jokes
  .getOne()
  .then(joke => {
    document
      .getElementById('joke')
      .innerHTML = joke;
  });