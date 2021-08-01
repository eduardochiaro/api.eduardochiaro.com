import axios from 'axios';
import dotenv from 'dotenv';
import { parseString } from 'xml2js';
dotenv.config();

const base = 'https://www.flickr.com/services';
const username = process.env.FLICKR_USERNAME;

const getPhotos = () => {
 return axios
    .get(`${base}/feeds/photos_public.gne?id=${username}`)
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
    }).then(async (response) => {
      var resultData = {};
      await parseString(response.data, function (err, result) {
        resultData = result;
      });     
      return resultData;
    });
}
export default { getPhotos }