import {
  DocumentHead,
  FAQ,
  Footer,
  IntegrationItems,
  Navbar,
} from 'components';
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
      if (search.trim() !== '' && category != null) {
        if (
          item.name.toUpperCase().includes(search.toUpperCase()) &&
          item.category === category
        ) {
          _items.push(item);
        }
      } else if (search.trim() !== '') {
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
      <DocumentHead
        title="Integrations - Integrate with Your Existing Tools"
        description="Integrate our platform with your other business tools to create a seamless customer experience. Our platform integrates with a variety of tools to help you manage your customer interactions efficiently."
      />
      <Layout>
        <Navbar />
        <Container>
          <IntegrationsIntro
            category={category}
            search={search}
            setCategory={setCategory}
            setSearch={setSearch}
          />
          <IntegrationItems search={search} items={items} />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
