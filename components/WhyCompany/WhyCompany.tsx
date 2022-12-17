import Image, { StaticImageData } from 'next/image';
import { Container, Header, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './WhyCompany.module.scss';

export const WhyCompany = () => {
  return (
    <div className={clsnm(styles.wrapper)}>
      <Container className={styles.container}>
        <Header inheritStyles="h1" className={styles.header} as="h3">
          Why Whelp?
        </Header>
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
