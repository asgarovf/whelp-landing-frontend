import { ArrowRight } from 'assets/icons';
import HomepageReportsRightBackground from 'assets/images/homepage/reports/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './HomepageReports.module.scss';

export const HomepageReports = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 85,
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
          src={HomepageReportsRightBackground}
          alt="Reports background"
        />
      </div>
    </div>
  );
};

const Left = () => {
  return (
    <Content>
      <Header as="h2">
        Track all your data with advanced reporting system
      </Header>
      <Text className={styles.subtext} subtext>
        Analyze the performance of the company in any time range.
      </Text>
      <Button
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
