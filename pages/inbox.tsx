import {
  Assign,
  Call,
  ContainerOnlyDesktop,
  Customize,
  DocumentHead,
  EmailCompose,
  EmailInbox,
  FAQ,
  Features,
  Footer,
  InboxHero,
  InboxUI,
  Navbar,
  OmniChannel,
  SavedResponse,
  Schedule,
  UserDetails,
  Voice,
} from 'components';
import { Container, Layout } from 'ui';
import { inboxFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead
        title="Inbox - Streamline Your Customer Communications"
        description="Manage all of your customer interactions in one place with our comprehensive inbox. Use our AI capabilities to prioritize and respond to inquiries efficiently."
      />
      <Layout>
        <Navbar />
        <Container>
          <InboxHero />
          <InboxUI />
          <Assign />
        </Container>
        <div className="purpleBg">
          <Container>
            <EmailCompose />
            <Customize />
            <EmailInbox />
          </Container>
        </div>
        <Container>
          <UserDetails />
          <SavedResponse />
        </Container>
        <ContainerOnlyDesktop>
          <OmniChannel />
        </ContainerOnlyDesktop>
        <Container>
          <Call />
          <Schedule />
          <Voice />
          <Features disableMarginBottom items={inboxFeatureData} />
        </Container>
        <Container>
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
