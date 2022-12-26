import HeroRightBackground from 'assets/images/homepage/landing/blue-bg.png';
import HeroRightBottomRight from 'assets/images/homepage/landing/bottom-right.png';
import HeroRightLeftCenter from 'assets/images/homepage/landing/left-center.png';
import HeroRightLineBottom from 'assets/images/homepage/landing/line-bottom.png';
import HeroRightLineTop from 'assets/images/homepage/landing/line-top.png';
import HeroRightModelfrom from 'assets/images/homepage/landing/model.png';
import HeroRightTopRight from 'assets/images/homepage/landing/top-right.png';
import { useDefaultGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Input, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Hero.module.scss';

export const Hero = () => {
  const gap = useDefaultGap();

  return (
    <DualGrid
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
          loading="lazy"
          className={styles.imageBg}
          src={HeroRightBackground}
          alt="Hero background"
        />
        <Image
          loading="lazy"
          className={styles.model}
          src={HeroRightModelfrom}
          alt="Hero model"
        />
        <Image
          loading="lazy"
          className={styles.topRight}
          src={HeroRightTopRight}
          alt="Hero top right"
        />
        <Image
          loading="lazy"
          className={styles.leftCenter}
          src={HeroRightLeftCenter}
          alt="Hero left center"
        />
        <Image
          loading="lazy"
          className={styles.bottomRight}
          src={HeroRightBottomRight}
          alt="Hero bottom right"
        />
        <Image
          loading="lazy"
          className={styles.lineBottom}
          src={HeroRightLineBottom}
          alt="Hero line bottom"
        />
        <Image
          loading="lazy"
          className={styles.lineTop}
          src={HeroRightLineTop}
          alt="Hero line top"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <Content>
      <Header inheritStyles="hero" as="h1">
        A better way to connect with your customers
      </Header>
      <Text className={styles.subtext} subtext>
        AI-based omnichannel shared inbox for customer support over Voice,
        Email, Live Chat, SMS, and WhatsApp.
      </Text>
      <div className={styles.formWrapper}>
        <Input
          placeholder="Enter your email"
          wrapperProps={{
            className: styles.input,
          }}
          className={styles.inputEl}
          width="100%"
          height="52px"
        />
        <Button
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
