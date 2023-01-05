import { useInitialTheme } from 'hooks';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalContextProvider } from 'store/global';
import 'styles/globals.scss';
import { getFonts } from 'utils/getFonts';

const { poppins, cooper } = getFonts();

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useInitialTheme();

  return (
    <GlobalContextProvider>
      <style jsx global>{`
        html,
        span,
        p {
          font-family: 'Poppins', sans-serif !important;
        }
        .poppins {
          font-family: 'Poppins', sans-serif !important;
        }
        .cooper {
          font-family: ${cooper.style.fontFamily} !important;
        }
      `}</style>
      <style jsx global>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        `}
      </style>
      <NextNProgress color="black" />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />{' '}
      </QueryClientProvider>
    </GlobalContextProvider>
  );
}
