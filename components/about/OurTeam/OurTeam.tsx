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
          Our team is made up of talented and experienced professionals who are
          dedicated to delivering the best possible customer experience. From
          our customer service reps to our developers, everyone at our company
          is committed to helping our clients succeed.
        </Text>
        <div className={styles.imageWrapper}>
          <img src={OurTeamImage.src} alt="Our team" className={styles.image} />
        </div>
      </Container>
    </div>
  );
};
