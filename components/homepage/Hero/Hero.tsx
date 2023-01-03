import HeroRightBackground from 'assets/images/homepage/landing/blue-bg.png';
import HeroRightBottomRight from 'assets/images/homepage/landing/bottom-right.png';
import HeroRightLeftCenter from 'assets/images/homepage/landing/left-center.png';
import HeroRightLineBottom from 'assets/images/homepage/landing/line-bottom.png';
import HeroRightLineTop from 'assets/images/homepage/landing/line-top.png';
import HeroRightModelfrom from 'assets/images/homepage/landing/model.png';
import HeroRightTopRight from 'assets/images/homepage/landing/top-right.png';
import { useDefaultGap } from 'hooks';
import Image from 'next/image';
import { useState } from 'react';
import { Button, Content, Header, Input, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import { getSignupUrl } from 'utils/getSignupUrl';

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
  const [mainImageLoaded, setMainImageLoaded] = useState(false);
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          onLoad={() => {
            setMainImageLoaded(true);
          }}
          loading="lazy"
          className={styles.imageBg}
          src={HeroRightBackground}
          alt="Hero background"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.model, !mainImageLoaded && 'd-none')}
          src={HeroRightModelfrom}
          alt="Hero model"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.topRight, !mainImageLoaded && 'd-none')}
          src={HeroRightTopRight}
          alt="Hero top right"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.leftCenter, !mainImageLoaded && 'd-none')}
          src={HeroRightLeftCenter}
          alt="Hero left center"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.bottomRight, !mainImageLoaded && 'd-none')}
          src={HeroRightBottomRight}
          alt="Hero bottom right"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.lineBottom, !mainImageLoaded && 'd-none')}
          src={HeroRightLineBottom}
          alt="Hero line bottom"
        />
        <Image
          loading="lazy"
          className={clsnm(styles.lineTop, !mainImageLoaded && 'd-none')}
          src={HeroRightLineTop}
          alt="Hero line top"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  const [value, setValue] = useState('');

  return (
    <Content>
      <Header inheritStyles="hero" as="h1">
        Elevate Your Customer Engagement with Our AI-Powered Omnichannel
        Solution
      </Header>
      <Text className={styles.subtext} subtext>
        Connect with customers on Voice, Email, Live Chat, SMS, and WhatsApp for
        seamless, personalized service. Boost efficiency with our unified
        customer view and AI-powered automations.
      </Text>
      <div className={styles.formWrapper}>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          wrapperProps={{
            className: styles.input,
          }}
          className={styles.inputEl}
          width="100%"
          height="52px"
        />
        <Button
          href={getSignupUrl(value)}
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
