import BackgroundImage from 'assets/images/chatbot/bot-channels/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './BotChannels.module.scss';

export const BotChannels = () => {
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
        Select your desired channel
      </Header>
      <Text className={styles.subtext} subtext>
        Communicate with customers through their preferred channels, including
        SMS, Voice, WhatsApp, WeChat, Messenger, Email, Live Chat, and other
        social messengers.
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
          alt="BotChannels background"
        />
      </div>
    </div>
  );
};
