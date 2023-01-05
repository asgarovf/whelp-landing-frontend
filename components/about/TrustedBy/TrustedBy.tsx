import Fivehundred from 'assets/images/about/500.png';
import Techstars from 'assets/images/about/techstars.png';
import Image from 'next/image';
import { Container, Header, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './TrustedBy.module.scss';

export const TrustedBy = () => {
  return (
    <div className={clsnm(styles.wrapper)}>
      <Container className={styles.container}>
        <Header inheritStyles="h1" as="h2" className={styles.header}>
          Trusted by
        </Header>
        <div className={styles.items}>
          <div className={styles.item}>
            <img className={styles.image} src={Techstars.src} alt="Techstars" />
            <Text className={styles.itemText}>
              Whelp is proud to be a part of the Techstars portfolio, helping to
              drive innovation and success in the world of customer support.
            </Text>
          </div>
          <div className={styles.item}>
            <img
              className={styles.image}
              src={Fivehundred.src}
              alt="Five Hundred Startups"
            />
            <Text className={styles.itemText}>
              As a part of the 500 Startups accelerator program, Whelp has
              gained access to a global network of mentors, advisors, and
              investors, providing valuable resources and support as we continue
              to grow and scale our business.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};
