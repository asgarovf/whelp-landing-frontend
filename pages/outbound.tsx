import {
  BulkMessages,
  CampaignReports,
  DocumentHead,
  FAQ,
  Features,
  FilterAudience,
  Footer,
  Navbar,
  OutboundHero,
  Personalization,
  ScheduleOutbound,
  SelectChannel,
  TargetAudience,
} from 'components';
import { Container, Layout } from 'ui';
import { inboxFeatureData, outboundFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead title="Outbound" />
      <Layout>
        <Navbar />
        <Container>
          <OutboundHero />
        </Container>
        <div className="purpleBg pmb pmt">
          <Container>
            <BulkMessages />
            <CampaignReports />
          </Container>
        </div>
        <Container>
          <FilterAudience />
          <TargetAudience />
          <ScheduleOutbound />
          <Personalization />
          <SelectChannel />
          <Features items={outboundFeatureData} />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
