import HeroRightBackground from 'assets/images/landing/blue-background.png';
import { useDefaultGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Input, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Hero.module.scss';

export const Hero = () => {
  const gap = useDefaultGap();

  return (
    <DualGrid
      maxHeight
      gap={gap}
      paddingTop={40}
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
    <Content>
      <Header>A better way to connect with your customers</Header>
      <Text className={styles.subtext} subtext>
        AI-based omnichannel shared inbox for customer support over Voice,
        Email, Live Chat, SMS, and WhatsApp.
      </Text>
      <div className={styles.formWrapper}>
        <Input
          disableRightBorder
          topRightRadius="0px"
          bottomRightRadius="0px"
          width="95%"
          height="52px"
        />
        <Button
          topLeftRadius="0px"
          bottomLeftRadius="0px"
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
