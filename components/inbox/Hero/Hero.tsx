import { ArrowRight } from 'assets/icons';
import HeroRightBackground from 'assets/images/inbox/hero/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Input, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Hero.module.scss';

export const Hero = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 120,
  });

  return (
    <DualGrid
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
          alt="Hero background"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <Content className={styles.content}>
      <Header inheritStyles="hero" as="h1">
        Manage all your conversations in one place
      </Header>
      <Text className={styles.subtext} subtext>
        Consolidate phone, email, chat, and messaging app conversations in one
        location for easy management and response to customer inquiries.
      </Text>
      <div className={styles.formWrapper}>
        <Button
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
