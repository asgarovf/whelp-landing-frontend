import Seymur from 'assets/images/homepage/quote/seymur.png';
import {
  DocumentHead,
  Footer,
  Navbar,
  PricingComponent,
  Quote,
} from 'components';
import { Layout } from 'ui';

export default function Pricing() {
  return (
    <>
      <DocumentHead title="Pricing" />
      <Layout>
        <Navbar />
        <PricingComponent />
        <Quote
          content="“WhatsApp blended with Whelp interface is the ideal tool to reach your audience and promote your product and service.”"
          position="CEO at Whelp, Inc"
          image={Seymur}
          title="Seymur Rasulov"
        />
        <Footer />
      </Layout>
    </>
  );
}
