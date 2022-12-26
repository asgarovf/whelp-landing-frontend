import {
  Bot,
  BotChannels,
  BotCondition,
  BotFlow,
  BotFlow1,
  BotFlow2,
  BotReports,
  ChatbotHero,
  DocumentHead,
  FAQ,
  Features,
  Footer,
  HappyCustomers,
  Navbar,
} from 'components';
import { Container, Layout } from 'ui';
import { inboxFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead title="Chatbot" />
      <Layout>
        <Navbar />
        <Container>
          <ChatbotHero />
          <Bot />
          <HappyCustomers />
        </Container>
        <div className="purpleBg pmb pmt">
          <Container>
            <BotFlow1 />
            <BotFlow2 />
            <BotReports />
          </Container>
        </div>
        <Container>
          <BotFlow />
          <BotCondition />
          <BotChannels />
          <Features items={inboxFeatureData} />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
