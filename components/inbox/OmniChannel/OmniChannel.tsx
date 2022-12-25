import { Header, Text } from 'ui';

import styles from './OmniChannel.module.scss';

export const OmniChannel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header className={styles.header} as="h2">
          Truly omnichannel
        </Header>
        <Text className={styles.text} subtext>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit
          eu mauris lobortis fringilla a eu lectus.
        </Text>
      </div>
      <div className={styles.channels}>asfasf</div>
    </div>
  );
};
