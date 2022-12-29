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
      <DocumentHead title="Inbox" />
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
          <Features items={inboxFeatureData} />
        </Container>
        <Container>
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
