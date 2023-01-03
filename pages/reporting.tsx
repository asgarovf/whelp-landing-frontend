import {
  AverageHandlingTime,
  ChannelReports,
  ChatbotReports,
  DocumentHead,
  FAQ,
  Features,
  FirstResponseTime,
  Footer,
  Navbar,
  RangeFilter,
  ReportingHero,
  ReportsOverview,
} from 'components';
import { Container, Layout } from 'ui';
import { inboxFeatureData, reportingFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead title="Reporting" />
      <Layout>
        <Navbar />
        <Container>
          <ReportingHero />
        </Container>
        <div className="purpleBg pmb pmt">
          <Container>
            <AverageHandlingTime />
            <FirstResponseTime />
          </Container>
        </div>
        <Container>
          <ChatbotReports />
          <ChannelReports />
          <ReportsOverview />
          <RangeFilter />
          <Features items={reportingFeatureData} />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
