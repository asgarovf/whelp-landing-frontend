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
      <DocumentHead
        title="Contact - Contact Us for More Information"
        description="Get in touch with our team to learn more about how our omnichannel CRM platform can help you improve your customer relationships. We're here to answer any questions you may have."
      />
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
