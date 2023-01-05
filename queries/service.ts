import Axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const axios = Axios.create({
  baseURL,
});
