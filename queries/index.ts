import { axios } from 'queries/service';
import { ContactCreateDto } from 'queries/types';

export const apiCreateContact = (body: ContactCreateDto) =>
  axios.post('/contact', {
    body,
  });
