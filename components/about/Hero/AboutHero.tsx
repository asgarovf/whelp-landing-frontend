import { Container, Header, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './AboutHero.module.scss';

export const AboutHero = () => {
  return (
    <div className={clsnm(styles.wrapper)}>
      <Container className={styles.container}>
        <Header inheritStyles="hero" as="h1" className={styles.header}>
          A better way to connect with your customers
        </Header>
        <Text subtext className={styles.subtext}>
          We help companies communicate with customers more effectively and
          efficiently. Whelp is a conversational customer support platform that
          helps businesses to communicate with customers across any channel.
        </Text>
        <div className={styles.items}>
          <div className={styles.item}>
            <Text className={styles.itemHeader}>68%</Text>
            <Text className={styles.itemText}>
              Automation for Ecommerce at least
            </Text>
          </div>
          <div className={styles.item}>
            <Text className={styles.itemHeader}>2.7%</Text>
            <Text className={styles.itemText}>
              Increase in usage of WhatsApp
            </Text>
          </div>
          <div className={styles.item}>
            <Text className={styles.itemHeader}>2M+</Text>
            <Text className={styles.itemText}>
              Conversations have been answered
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};
