import { ArrowRight } from 'assets/icons';
import HeroRightBackground from 'assets/images/crm/hero/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Text } from 'ui';
import { getSignupUrl } from 'utils/getSignupUrl';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './CRMHero.module.scss';

export const CRMHero = () => {
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
          alt="CRM Hero background"
        />
      </div>
    </div>
  );
};

const HeroLeft = () => {
  return (
    <Content className={styles.content}>
      <Header inheritStyles="hero" as="h1">
        The CRM solution you've been looking for
      </Header>
      <Text className={styles.subtext} subtext>
        Streamline your customer relationship management with our feature-rich
        platform that offers tools and solutions to improve your customer
        support.
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
