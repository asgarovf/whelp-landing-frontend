import { DocumentHead, Navbar } from 'components';
import Head from 'next/head';
import { Layout } from 'ui';

export default function Home() {
  return (
    <>
      <DocumentHead title="Home" />
      <Layout>
        <Navbar />
      </Layout>
    </>
  );
}
