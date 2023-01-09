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
      <DocumentHead title="Compare - Kustomer" />
      <Layout>
        <Navbar />
        <CompareHero
          compareTo="Kustomer"
          subtext="Compare the features of Whelp and Kustomer with our comprehensive comparison page and see why Whelp is the top choice for businesses."
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
            compareTo="Kustomer"
          />
        </Container>

        <Footer />
      </Layout>
    </>
  );
}
