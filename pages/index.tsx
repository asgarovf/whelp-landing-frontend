import { DocumentHead, DualGrid, Navbar } from 'components';
import { Container, Layout } from 'ui';

export default function Home() {
  return (
    <>
      <DocumentHead title="Home" />
      <Layout>
        <Navbar />
        <Container>
          <DualGrid
            reverseOnMobile
            left={<div>assetsasf</div>}
            right={<div>asfafssf</div>}
          />
        </Container>
      </Layout>
    </>
  );
}
