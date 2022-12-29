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
          Whelp offers tools and omnichannel solutions to help businesses
          streamline conversations through their customers’ preferred channels —
          like SMS, Voice, WhatsApp, WeChat, Messenger, Email and Live Chat, and
          other social messengers. Whelp gives agents a powerful platform to
          enhance the customer support and end consumers instant, safe and
          secure access to information they need. It also means they can spend
          less time on hold, avoid repeating stories to multiple agents, and get
          more time to do what they love.
        </Text>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={CEO.src} />
            <Text className={styles.itemHeader}>Seymur Rasulov</Text>
            <Text className={styles.itemText}>CEO & Co-founder</Text>
            <Button
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
