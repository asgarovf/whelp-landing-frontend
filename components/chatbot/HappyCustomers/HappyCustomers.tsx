import BackgroundImage from 'assets/images/chatbot/happy-customers/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './HappyCustomers.module.scss';

export const HappyCustomers = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
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
        Happy customers
      </Header>
      <Text className={styles.subtext} subtext>
        Keep your customers happy with fast, efficient, and personalized support
        from our chatbot.
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
          alt="HappyCustomers background"
        />
      </div>
    </div>
  );
};
