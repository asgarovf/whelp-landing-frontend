import BackgroundImage from 'assets/images/chatbot/bot/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Bot.module.scss';

export const Bot = () => {
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
        Get 7/24 support with our chatbot
      </Header>
      <Text className={styles.subtext} subtext>
        Provide your customers with 24/7 support by automating common inquiries
        with our AI-based chatbot.
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
          alt="Bot background"
        />
      </div>
    </div>
  );
};
