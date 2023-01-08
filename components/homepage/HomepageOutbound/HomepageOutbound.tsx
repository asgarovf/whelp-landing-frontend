import { ArrowRight } from 'assets/icons';
import OutboundBackgroundImage from 'assets/images/homepage/outbound/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './HomepageOutbound.module.scss';

export const HomepageOutbound = () => {
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
        Customize Your Communication Efforts
      </Header>
      <Text className={styles.subtext} subtext>
        Whelp allows you to easily customize and automate your communication
        campaigns, sending bulk messages via WhatsApp, Telegram, Email, and
        Facebook Messenger.
      </Text>
      <Button
        href="/outbound"
        className={styles.button}
        rigthEl={
          <Icon>
            <ArrowRight />
          </Icon>
        }
        color="transparent"
        width="max-content"
      >
        Learn more
      </Button>
    </Content>
  );
};

const Left = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={OutboundBackgroundImage}
          alt="Inbox background"
        />
      </div>
    </div>
  );
};
