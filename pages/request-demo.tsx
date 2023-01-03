import { DemoForm, DocumentHead, Footer, Navbar } from 'components';
import { useEffect } from 'react';
import { useGlobalStore } from 'store/global';
import { Container, Layout } from 'ui';

export default function RequestDemo() {
  const { setInitializedCalendly } = useGlobalStore();

  useEffect(() => {
    const calendlyScript = document.createElement('script');
    calendlyScript.type = 'text/javascript';
    calendlyScript.id = 'calendly';
    calendlyScript.src =
      'https://assets.calendly.com/assets/external/widget.js';

    calendlyScript.onload = () => {
      setInitializedCalendly(true);
    };
    document.body.append(calendlyScript);

    return () => {
      const el = document.getElementById('calendly');
      if (el != null) {
        el.remove();
      }
    };
  }, []);

  return (
    <>
      <DocumentHead title="Request Demo" />
      <Layout>
        <Navbar />
        <Container>
          <DemoForm />
        </Container>
        <Footer />
      </Layout>
    </>
  );
}
