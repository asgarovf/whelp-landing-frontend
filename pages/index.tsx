import Seymur from 'assets/images/homepage/quote/seymur.png';
import {
  CRM,
  Chatbot,
  ContainerOnlyDesktop,
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
import { useMemo } from 'react';
import { FeatureItem } from 'types';
import { Container, Layout } from 'ui';
import { homeData } from 'utils/data';

import { Footer } from 'components/Footer/Footer';

export default function Home() {
  const items = useMemo((): FeatureItem[] => {
    return homeData;
  }, []);

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
        <ContainerOnlyDesktop>
          <Integrations />
        </ContainerOnlyDesktop>
        <Footer />
      </Layout>
    </>
  );
}
