import BackgroundImage from 'assets/images/inbox/schedule/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Schedule.module.scss';

export const Schedule = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      reverseOnMobile
      paddingY={80}
      rightClassName={styles.right}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Right = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h3">
        Schedule Your Messages for Later
      </Header>
      <Text className={styles.subtext} subtext>
        Schedule messages to be sent at a later time to ensure that your
        customers receive timely and efficient support.
      </Text>
    </Content>
  );
};

const Left = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="Schedule inbox background"
        />
      </div>
    </div>
  );
};
