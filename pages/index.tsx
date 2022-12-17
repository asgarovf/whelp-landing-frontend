import { Shield } from 'assets/icons';
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
  Navbar,
  Quote,
  WhyCompany,
} from 'components';
import { useMemo } from 'react';
import { FeatureItem } from 'types';
import { Container, Layout } from 'ui';

export default function Home() {
  const items = useMemo((): FeatureItem[] => {
    return [
      {
        icon: <Shield />,
        title: 'Security first',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
        color: `var(--subtext)`,
      },
    ];
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
      </Layout>
    </>
  );
}
