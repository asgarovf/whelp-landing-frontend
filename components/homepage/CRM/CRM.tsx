import { ArrowRight } from 'assets/icons';
import CRMBackgroundImage from 'assets/images/homepage/crm/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './CRM.module.scss';

export const CRM = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      paddingY={80}
      leftClassName={styles.left}
      gap={gap}
      left={<CRMLeft />}
      right={<CRMRight />}
    />
  );
};

const CRMLeft = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h2">
        Streamline Your Workflow with a CRM Solution
      </Header>
      <Text className={styles.subtext} subtext>
        Our platform simplifies the process of managing and responding to
        customer inquiries and concerns by consolidating all of their
        interactions and data in one place.
      </Text>
      <Button
        href="/crm"
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

const CRMRight = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={CRMBackgroundImage}
          alt="CRM background"
        />
      </div>
    </div>
  );
};
