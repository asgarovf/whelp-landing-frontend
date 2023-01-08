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
import { chatbotFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead
        title="Chatbot - AI-Powered Chatbot Capabilities"
        description="Enhance your customer support with our AI-powered chatbot. Use it to answer common questions, provide personalized recommendations, and escalate complex issues to a human agent."
      />
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
          <Features
            disableMarginBottom
            disableMarginTop
            items={chatbotFeatureData}
          />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
