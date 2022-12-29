import { DocumentHead, Footer, Navbar } from 'components';
import styles from 'styles/pages/404.module.scss';
import { Button, Container, Header, Text } from 'ui';

const FourOFour = () => {
  return (
    <>
      <DocumentHead title="Page not found" />
      <Navbar />
      <Container>
        <div className={styles.wrapper}>
          <Header inheritStyles="hero" as="h1">
            Page you’re looking for is not available
          </Header>
          <Text className={styles.text} subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit
            eu mauris lobortis fringilla a eu lectus.
          </Text>
          <Button href="/" color="black" className={styles.button}>
            Go to homepage
          </Button>
        </div>
      </Container>
      <Footer include={false} />
    </>
  );
};

export default FourOFour;
