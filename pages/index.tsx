import { CRM, DocumentHead, Hero, Inbox, Navbar } from 'components';
import { Container, Layout } from 'ui';

export default function Home() {
  return (
    <>
      <DocumentHead title="Home" />
      <Layout>
        <Navbar />
        <Container>
          <Hero />
          <CRM />
          <Inbox />
        </Container>
      </Layout>
    </>
  );
}
