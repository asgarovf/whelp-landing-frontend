import BackgroundImage from 'assets/images/inbox/call/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Call.module.scss';

export const Call = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 85,
  });

  return (
    <DualGrid
      paddingY={80}
      leftClassName={styles.left}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Left = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h2">
        CRM that you’ve been looking for
      </Header>
      <Text className={styles.subtext} subtext>
        Upgrade your customer support with our features. We collect all of your
        user data on one platform.
      </Text>
    </Content>
  );
};

const Right = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="Call inbox background"
        />
      </div>
    </div>
  );
};