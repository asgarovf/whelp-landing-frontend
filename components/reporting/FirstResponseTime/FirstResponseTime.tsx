import BackgroundImage from 'assets/images/reporting/first-response-time/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './FirstResponseTime.module.scss';

export const FirstResponseTime = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      className={styles.wrapper}
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
        First response time analysis
      </Header>
      <Text className={styles.subtext} subtext>
        Our reporting system includes tools to analyze and track your team's
        First Response Time, helping you optimize your customer support and
        improve your response times.
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
          alt="FirstResponseTime background"
        />
      </div>
    </div>
  );
};
