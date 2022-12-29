import OurTeamImage from 'assets/images/about/our-team.png';
import { Container, Header, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './OurTeam.module.scss';

export const OurTeam = () => {
  return (
    <div className={clsnm(styles.wrapper)}>
      <Container className={styles.container}>
        <Header inheritStyles="h1" as="h2" className={styles.header}>
          Our awesome team
        </Header>
        <Text subtext className={styles.subtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit
          eu mauris lobortis fringilla a eu lectus.
        </Text>
        <div className={styles.imageWrapper}>
          <img src={OurTeamImage.src} alt="Our team" className={styles.image} />
        </div>
      </Container>
    </div>
  );
};
