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
      <DocumentHead title="About" />
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
        <Footer />
      </Layout>
    </>
  );
}
