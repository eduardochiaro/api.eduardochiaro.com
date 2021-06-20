import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const base = 'https://api.github.com/users';
const username = process.env.GITHUB_USERNAME;

const getAll = (req, res) => {
  console.log(`${base}/${username}/repos?sort=updated`);
  axios
    .get(`${base}/${username}/repos?sort=updated`)
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request)
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message)
      }
      console.log(error.config)
    }).then(response => res.json({results: response.data}));
}
export default { getAll }