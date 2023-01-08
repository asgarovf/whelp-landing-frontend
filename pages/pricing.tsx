import Seymur from 'assets/images/homepage/quote/seymur.png';
import {
  DocumentHead,
  FAQ,
  Footer,
  IntegrationItems,
  IntegrationsIntro,
  Navbar,
  PricingComponent,
  Quote,
} from 'components';
import styles from 'styles/pages/Pricing.module.scss';
import { Container, Layout } from 'ui';
import { IntegrationsData } from 'utils/integrations';

export default function Pricing() {
  return (
    <>
      <DocumentHead title="Pricing" />
      <Layout>
        <Navbar />
        <PricingComponent />
        <Quote
          className={styles.wrapper}
          content="“WhatsApp blended with Whelp interface is the ideal tool to reach your audience and promote your product and service.”"
          position="CEO at Whelp, Inc"
          image={Seymur}
          title="Seymur Rasulov"
        />
        <Container>
          <IntegrationsIntro
            showButton
            search=""
            category={null}
            setSearch={() => undefined}
            setCategory={() => undefined}
            disableSearch
          />
          <IntegrationItems items={IntegrationsData} search="" itemLimit={8} />
        </Container>
        <FAQ />
        <Footer />
      </Layout>
    </>
  );
}
