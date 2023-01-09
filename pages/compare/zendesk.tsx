import {
  CompareHero,
  Comparison,
  DocumentHead,
  Footer,
  Navbar,
} from 'components';
import { Container, Layout } from 'ui';

export default function Compare() {
  return (
    <>
      <DocumentHead title="Compare" />
      <Layout>
        <Navbar />
        <CompareHero
          compareTo="Zendesk"
          subtext="Learn how Whelp's advanced features set it apart from Zendesk and other omnichannel inbox and AI chatbot tools with our comparison page."
        />
        <Container>
          <Comparison
            data={[
              {
                whelp: true,
                other: true,
                feature: 'Integration with popular messaging apps',
              },
              {
                whelp: true,
                other: true,
                feature: 'Multi-language support',
              },
              {
                whelp: true,
                other: false,
                feature: 'On-Premises deployment',
              },
              {
                whelp: true,
                other: true,
                feature: 'Customizable chatbot responses',
              },
              {
                whelp: true,
                other: true,
                feature: 'Option to route chats to human agents',
              },
              {
                whelp: true,
                other: false,
                feature: 'Dedicated support for every customer',
              },
              {
                whelp: true,
                other: false,
                feature: 'White label option',
              },
            ]}
            compareTo="Zendesk"
          />
        </Container>

        <Footer />
      </Layout>
    </>
  );
}
