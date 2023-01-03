import BackgroundImage from 'assets/images/reporting/range-filter/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './RangeFilter.module.scss';

export const RangeFilter = () => {
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
      left={<Left />}
      right={<Right />}
    />
  );
};

const Left = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h2">
        Custom range filter
      </Header>
      <Text className={styles.subtext} subtext>
        Set custom date ranges to filter your data and focus on specific time
        periods with our reporting system's custom range filter.
      </Text>
    </Content>
  );
};

const Right = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="RangeFilter background"
        />
      </div>
    </div>
  );
};
