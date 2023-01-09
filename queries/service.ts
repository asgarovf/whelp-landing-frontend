import Axios from 'axios';

const baseURL = 'https://landing.whelp.co/api';

export const axios = Axios.create({
  baseURL,
});
