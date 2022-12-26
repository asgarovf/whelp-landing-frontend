import { ArrowRight } from 'assets/icons';
import HeroRightBackground from 'assets/images/crm/hero/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Text } from 'ui';

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
      <Header as="h1">CRM that you’ve been looking for</Header>
      <Text className={styles.subtext} subtext>
        Upgrade your customer support with our features. We collect all of your
        user data on one platform.
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
