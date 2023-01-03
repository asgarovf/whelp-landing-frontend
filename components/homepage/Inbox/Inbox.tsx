import { ArrowRight } from 'assets/icons';
import InboxBackgroundImage from 'assets/images/homepage/inbox/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Inbox.module.scss';

export const Inbox = () => {
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
      left={<InboxLeft />}
      right={<InboxRight />}
    />
  );
};

const InboxRight = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h3">
        Consolidate Your Customer Conversations in One Inbox
      </Header>
      <Text className={styles.subtext} subtext>
        A single inbox allows you to combine all of your phone, email, chat, and
        messaging app conversations in one location, improving your efficiency
        and customer satisfaction.
      </Text>
      <Button
        href="/inbox"
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

const InboxLeft = () => {
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
