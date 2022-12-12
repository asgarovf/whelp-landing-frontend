import { Poppins } from '@next/font/google';
import { useInitialTheme } from 'hooks';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }: AppProps) {
  useInitialTheme();

  return (
    <>
      <style jsx global>{`
        html,
        span,
        p {
          font-family: ${poppins.style.fontFamily};
        }
        .poppins {
          font-family: ${poppins.style.fontFamily} !important;
        }
      `}</style>
      <Component {...pageProps} />{' '}
    </>
  );
}
