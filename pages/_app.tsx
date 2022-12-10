import { useInitialTheme } from 'hooks';
import type { AppProps } from 'next/app';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  useInitialTheme();

  return <Component {...pageProps} />;
}
