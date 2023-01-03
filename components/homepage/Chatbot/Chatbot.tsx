import { ArrowRight } from 'assets/icons';
import ChatbotRightBackground from 'assets/images/homepage/chatbot/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Chatbot.module.scss';

export const Chatbot = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      gap={gap}
      paddingY={80}
      leftClassName={styles.left}
      rightClassName={styles.right}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Right = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          loading="lazy"
          className={styles.imageBg}
          src={ChatbotRightBackground}
          alt="Chatbot background"
        />
      </div>
    </div>
  );
};

const Left = () => {
  return (
    <Content>
      <Header as="h2"> Design Unique Chatbots with Drag and Drop</Header>
      <Text className={styles.subtext} subtext>
        The chatbot builder on this platform makes it easy for you to design and
        deploy chatbots that can provide your customers with 24/7 service and
        quick responses to their inquiries and concerns.
      </Text>
      <Button
        href="/chatbot"
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
