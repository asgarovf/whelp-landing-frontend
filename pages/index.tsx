import Seymur from 'assets/images/homepage/quote/seymur.png';
import {
  CRM,
  Chatbot,
  DocumentHead,
  Features,
  Hero,
  HomepageOutbound,
  HomepageReports,
  Inbox,
  Integrations,
  Navbar,
  Quote,
  WhyCompany,
} from 'components';
import { useSmall } from 'hooks';
import { useMemo } from 'react';
import styles from 'styles/pages/index.module.scss';
import { FeatureItem } from 'types';
import { Container, Layout } from 'ui';
import { homeData } from 'utils/data';

import { Footer } from 'components/Footer/Footer';

export default function Home() {
  const items = useMemo((): FeatureItem[] => {
    return homeData;
  }, []);

  const small = useSmall();

  return (
    <>
      <DocumentHead title="Home" />
      <Layout>
        <Navbar />
        <Container>
          <Hero />
          <CRM />
          <Inbox />
          <HomepageReports />
        </Container>
        <Quote
          content="“WhatsApp blended with Whelp interface is the ideal tool to reach your audience and promote your product and service.”"
          position="CEO at Whelp, Inc"
          image={Seymur}
          title="Seymur Rasulov"
        />
        <Container>
          <HomepageOutbound />
          <Chatbot />
        </Container>
        <WhyCompany />
        <Container>
          <Features items={items} />
        </Container>
        <Container className={styles.integrations}>
          <Integrations />
        </Container>
        <div className={styles.integrationsSm}>
          <Integrations />
        </div>
        <Footer />
      </Layout>
    </>
  );
}
