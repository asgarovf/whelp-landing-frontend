import { ArrowRight } from 'assets/icons';
import HeroRightBackground from 'assets/images/reporting/hero/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Text } from 'ui';
import { getSignupUrl } from 'utils/getSignupUrl';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './ReportingHero.module.scss';

export const ReportingHero = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 90,
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
          alt="Reporting hero background"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <Content className={styles.content}>
      <Header inheritStyles="hero" as="h1">
        Track all your data with the advanced reporting system
      </Header>
      <Text className={styles.subtext} subtext>
        Keep track of all your customer interactions and business performance
        with our advanced reporting system, equipped with a range of tools to
        help you analyze and optimize your operations.
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
