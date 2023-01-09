import { useInitialTheme } from 'hooks';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalContextProvider } from 'store/global';
import 'styles/globals.scss';
import { getFonts } from 'utils/getFonts';

const { poppins, cooper } = getFonts();

export const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useInitialTheme();

  useEffect(() => {
    const libraryEl = document.createElement('script');
    libraryEl.src = 'https://widget.getwhelp.com/app.js';
    libraryEl.onload = () => {
      const initEl = document.createElement('script');
      initEl.append(`Whelp("init", {
        app_id: "ddaa4869af1be6a5e5acfa2a8271692d"
      });`);
      document.body.append(initEl);
    };
    document.body.append(libraryEl);
  }, []);

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
          font-family: 'Cooper', sans-serif !important;
        }
        @font-face {
          font-family: Cooper;
          src: url(/fonts/Cooper/cooper-light.ttf);
          font-weight: 400;
        }
        @font-face {
          font-family: Cooper;
          src: url(/fonts/Cooper/cooper-medium.ttf);
          font-weight: 600;
        }
        @font-face {
          font-family: Cooper;
          src: url(/fonts/Cooper/cooper-bold.ttf);
          font-weight: 800;
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
