import {
  Contact as ContactComponent,
  DocumentHead,
  Footer,
  Navbar,
} from 'components';
import { Container, Layout } from 'ui';

export default function Contact() {
  return (
    <>
      <DocumentHead title="Contact" />
      <Layout>
        <Navbar />
        <Container>
          <ContactComponent />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
