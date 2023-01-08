import {
  Activity,
  AddTag,
  CRMHero,
  Dashboard,
  DocumentHead,
  ExportData,
  FAQ,
  Features,
  FilterData,
  Footer,
  Import,
  ManageContacts,
  MergeContacts,
  Navbar,
  TableFields,
  UserDetailsCRM,
} from 'components';
import { Container, Layout } from 'ui';
import { crmFeatureData, inboxFeatureData } from 'utils/data';

export default function Home() {
  return (
    <>
      <DocumentHead
        title="CRM - Comprehensive CRM Solutions"
        description="Boost your customer relationship management with our advanced CRM tools. Use our platform to track customer interactions, gather data, and deliver personalized experiences."
      />
      <Layout>
        <Navbar />
        <Container>
          <CRMHero />
        </Container>
        <Dashboard />
        <Container>
          <UserDetailsCRM />
          <Import />
          <TableFields />
          <Activity />
          <FilterData />
          <ManageContacts />
          <MergeContacts />
          <ExportData />
          <AddTag />
          <Features
            disableMarginTop
            disableMarginBottom
            items={crmFeatureData}
          />
          <FAQ />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
