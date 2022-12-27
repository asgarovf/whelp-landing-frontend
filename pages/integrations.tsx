import { DocumentHead, Footer, IntegrationItems, Navbar } from 'components';
import { IntegrationsIntro } from 'components';
import { useMemo, useState } from 'react';
import { Container, Layout } from 'ui';
import {
  IntegrationCategory,
  IntegrationItem,
  IntegrationsData,
} from 'utils/integrations';

export default function Integrations() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<IntegrationCategory | null>(null);

  const items = useMemo(() => {
    const _items: IntegrationItem[] = [];

    for (const item of IntegrationsData) {
      if (search.trim() === '' && category != null) {
        if (
          item.name.toUpperCase().includes(search.toUpperCase()) &&
          item.category === category
        ) {
          _items.push(item);
        }
      } else if (search.trim() === '') {
        if (item.name.toUpperCase().includes(search.toUpperCase())) {
          _items.push(item);
        }
      } else if (category != null) {
        if (item.category === category) {
          _items.push(item);
        }
      } else {
        _items.push(item);
      }
    }

    return _items;
  }, [search, category]);

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
          <IntegrationItems items={items} />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
