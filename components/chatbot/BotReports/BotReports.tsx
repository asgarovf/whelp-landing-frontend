import BackgroundImage from 'assets/images/chatbot/bot-reports/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './BotReports.module.scss';

export const BotReports = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      className={styles.wrapper}
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
        Chatbot reports
      </Header>
      <Text className={styles.subtext} subtext>
        Get detailed reports on the performance and effectiveness of your
        chatbot to optimize its performance.
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
          alt="BotReports background"
        />
      </div>
    </div>
  );
};
