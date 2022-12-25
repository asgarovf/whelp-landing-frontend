import {
  Assign,
  ContainerOnlyDesktop,
  Customize,
  DocumentHead,
  EmailCompose,
  EmailInbox,
  Footer,
  InboxHero,
  InboxUI,
  Navbar,
  OmniChannel,
  SavedResponse,
  UserDetails,
} from 'components';
import { Container, Layout } from 'ui';

export default function Home() {
  return (
    <>
      <DocumentHead title="Home" />
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
        <Footer />
      </Layout>
    </>
  );
}
