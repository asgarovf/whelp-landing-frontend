import {
  Activity,
  AddTag,
  CRMHero,
  Dashboard,
  DocumentHead,
  ExportData,
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
      <DocumentHead title="CRM" />
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
          <Features items={crmFeatureData} />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
