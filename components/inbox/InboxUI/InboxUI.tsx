import { ArrowRight } from 'assets/icons';
import InboxBackgroundImage from 'assets/images/inbox/inbox-ui/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './InboxUI.module.scss';

export const InboxUI = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 100,
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
        Manage all your conversations in one place
      </Header>
      <Text className={styles.subtext} subtext>
        We created a single inbox across phone, email, chat and messaging apps
        to manage and respond to all conversations.
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
          src={InboxBackgroundImage}
          alt="Inbox background"
        />
      </div>
    </div>
  );
};
