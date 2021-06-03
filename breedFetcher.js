const request = require('request');

const argv = process.argv.slice(2);
const breed = argv[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //if search not found, length of body is equal to 2
  if (body.length === 2) {
    console.log('Requested breed not found');
  } else if (error) {
    console.log('Error, Request Failed: ' + error);
  } else {
    //Convert string to object type
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  }
});