import {
  AboutHero,
  DocumentHead,
  Features,
  Footer,
  Navbar,
  OurTeam,
  Team,
  TrustedBy,
} from 'components';
import { Container, Layout } from 'ui';
import { homeData } from 'utils/data';

export default function About() {
  return (
    <>
      <DocumentHead
        title="About - Learn About Our Company and Team"
        description="Learn more about our company and how we're helping businesses improve their customer relationships. We're committed to providing a comprehensive and user-friendly CRM platform."
      />
      <Layout>
        <Navbar />
        <Container>
          <AboutHero />
        </Container>
        <OurTeam />
        <Container>
          <TrustedBy />
        </Container>
        <Team />
        <Container>
          <Features items={homeData} />
        </Container>
        <Footer className="footer-top" />
      </Layout>
    </>
  );
}
