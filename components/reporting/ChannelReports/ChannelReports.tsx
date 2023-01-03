import BackgroundImage from 'assets/images/reporting/channel-reports/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './ChannelReports.module.scss';

export const ChannelReports = () => {
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
        Channel-specific reports
      </Header>
      <Text className={styles.subtext} subtext>
        Our reporting system offers channel-specific reports to help you track
        and analyze your customer interactions across various channels, giving
        you a comprehensive view of your customer support.
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
          alt="ChannelReports background"
        />
      </div>
    </div>
  );
};
