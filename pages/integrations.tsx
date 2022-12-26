import { DocumentHead, Footer, Navbar } from 'components';
import { IntegrationsIntro } from 'components';
import { useState } from 'react';
import { Container, Layout } from 'ui';

export default function Integrations() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  return (
    <>
      <DocumentHead title="Integrations" />
      <Layout>
        <Navbar />
        <Container>
          <IntegrationsIntro
            category={category}
            search={search}
            setSearch={setSearch}
          />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
