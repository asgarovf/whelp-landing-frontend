import { ArrowRight } from 'assets/icons';
import HeroRightBackground from 'assets/images/chatbot/hero/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Text } from 'ui';
import { getSignupUrl } from 'utils/getSignupUrl';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './ChatbotHero.module.scss';

export const ChatbotHero = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      paddingY={80}
      maxHeight
      gap={gap}
      leftClassName={styles.left}
      rightClassName={styles.right}
      left={<HeroLeft />}
      right={<HeroRight />}
    />
  );
};

const HeroRight = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          loading="lazy"
          className={styles.imageBg}
          src={HeroRightBackground}
          alt="Chatbot hero background"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <Content className={styles.content}>
      <Header inheritStyles="hero" as="h1">
        Design unique chatbots with drag and drop builder
      </Header>
      <Text className={styles.subtext} subtext>
        Create personalized chatbots quickly and easily with our intuitive
        drag-and-drop builder.
      </Text>
      <div className={styles.formWrapper}>
        <Button
          href={getSignupUrl()}
          rigthEl={<ArrowRight />}
          className={styles.button}
          color="black"
          height="52px"
          paddingX="28px"
          paddingY="14px"
        >
          Get Started
        </Button>
      </div>
    </Content>
  );
};
