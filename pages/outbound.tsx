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
      <DocumentHead
        title="Outbound - Automated Outbound Communication"
        description="Reach out to your customers proactively with our outbound communication tools. Use our platform to send targeted messages, follow up with leads, and nurture customer relationships."
      />
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
          <Features
            disableMarginBottom
            disableMarginTop
            items={outboundFeatureData}
          />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
