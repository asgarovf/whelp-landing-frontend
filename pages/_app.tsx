import { useInitialTheme } from 'hooks';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';
import { getFonts } from 'utils/getFonts';

const { poppins, cooper } = getFonts();

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
        .cooper {
          font-family: ${cooper.style.fontFamily} !important;
        }
      `}</style>
      <Component {...pageProps} />{' '}
    </>
  );
}
