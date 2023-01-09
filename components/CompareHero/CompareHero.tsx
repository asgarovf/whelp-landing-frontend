import { Container, Header, Text } from 'ui';

import styles from './CompareHero.module.scss';

type Props = {
  compareTo: string;
  subtext: string;
};

export function CompareHero({ compareTo, subtext }: Props) {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Header className={styles.header} as="h1" inheritStyles="hero">
          Whelp vs {compareTo}.
        </Header>
        <Text subtext className={styles.subtext}>
          {subtext}
        </Text>
      </Container>
    </div>
  );
}
