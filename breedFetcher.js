const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  //check for error first  
  if (error) {
      callback(error, null);
      return;
    }
  
  //if search not found, length of body is equal to 2
    if (body.length === 2) {
      callback(null, 'Invalid search, please enter a correct breed');
      return;
    }

    const data = JSON.parse(body)[0]['description'];
    callback(null, data);
  });
};

module.exports = { fetchBreedDescription };