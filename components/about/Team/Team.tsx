import { Linkedin } from 'assets/icons';
import CEO from 'assets/images/about/ceo.png';
import CTO from 'assets/images/about/cto.png';
import { Button, Container, Header, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './Team.module.scss';

export const Team = () => {
  return (
    <div className={clsnm(styles.wrapper)}>
      <Container className={styles.container}>
        <Header inheritStyles="h1" as="h2" className={styles.header}>
          Some cool things about us
        </Header>
        <Text subtext className={styles.subtext}>
          At Whelp, we are dedicated to helping companies communicate with their
          customers more effectively and efficiently. Our conversational
          customer support platform allows businesses to easily connect with
          customers on their preferred channels, including SMS, voice, WhatsApp,
          WeChat, Messenger, email, and live chat. With our AI-based chatbot,
          companies can automate up to 60% of customer inquiries, freeing up
          their teams to focus on more complex issues. Additionally, our
          customer management platform offers a feature-rich interface that
          unifies messaging from multiple channels into a single screen. Based
          in New York, USA, Whelp currently powers customer support for over 550
          companies in 16 countries and is proud to be part of the 500 Startups
          and Techstars portfolio.
        </Text>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={CEO.src} />
            <Text className={styles.itemHeader}>Seymur Rasulov</Text>
            <Text className={styles.itemText}>CEO & Co-founder</Text>
            <Button
              target={'_blank'}
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/seymur-rasulov/"
              className={styles.itemButton}
              color="white"
            >
              <Icon>
                <Linkedin />
              </Icon>
            </Button>
          </div>
          <div className={styles.item}>
            <img src={CTO.src} />
            <Text className={styles.itemHeader}>Enrike Nur</Text>
            <Text className={styles.itemText}>CTO & Co-founder</Text>
            <Button
              target={'_blank'}
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/enrikenur/"
              className={styles.itemButton}
              color="white"
            >
              <Icon>
                <Linkedin />
              </Icon>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
