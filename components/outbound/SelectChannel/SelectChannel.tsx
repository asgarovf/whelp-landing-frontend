import BackgroundImage from 'assets/images/outbound/select-channel/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './SelectChannel.module.scss';

export const SelectChannel = () => {
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
        Choose your desired channel for your campaigns
      </Header>
      <Text className={styles.subtext} subtext>
        Reach your audience through their preferred channels, including SMS,
        Voice, WhatsApp, WeChat, Messenger, Email, and Live Chat.
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
          alt="SelectChannel background"
        />
      </div>
    </div>
  );
};
