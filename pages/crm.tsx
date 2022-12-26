import { CRMHero, Dashboard, DocumentHead, Footer, Navbar } from 'components';
import { Container, Layout } from 'ui';

export default function Home() {
  return (
    <>
      <DocumentHead title="CRM" />
      <Layout>
        <Navbar />
        <Container>
          <CRMHero />
        </Container>
        <Dashboard />
        <Footer />
      </Layout>
    </>
  );
}
