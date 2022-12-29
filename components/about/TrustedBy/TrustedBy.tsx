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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              elit eu mauris lobortis fringilla a eu lectus. Curabitur neque
              ante, vehicula non lectus in, euismod consectetur turpis.
            </Text>
          </div>
          <div className={styles.item}>
            <img
              className={styles.image}
              src={Fivehundred.src}
              alt="Five Hundred Startups"
            />
            <Text className={styles.itemText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              elit eu mauris lobortis fringilla a eu lectus. Curabitur neque
              ante, vehicula non lectus in, euismod consectetur turpis.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
};
