import { Poppins } from '@next/font/google';
import localFont from '@next/font/local';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const cooper = localFont({
  src: [
    {
      path: '../styles/fonts/Cooper/cooper-light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Cooper/cooper-medium.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../styles/fonts/Cooper/cooper-bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export const getFonts = () => {
  return { poppins, cooper };
};
