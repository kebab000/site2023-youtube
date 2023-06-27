import axios from 'axios';

const BaSE_URL = 'https://youtube.googleapis.com/youtube/v3/search';
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: BaSE_URL,
  headers: {},
};
axios
  .request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
