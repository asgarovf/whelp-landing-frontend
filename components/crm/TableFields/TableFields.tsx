import BackgroundImage from 'assets/images/crm/table-fields/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './TableFields.module.scss';

export const TableFields = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      reverseOnMobile
      className={styles.wrapper}
      paddingY={80}
      rightClassName={styles.right}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Right = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h2">
        Customize your data management
      </Header>
      <Text className={styles.subtext} subtext>
        With this platform, you have control over your data management. You can
        create your own tables and set your own rules for organizing and
        tracking your customer data.
      </Text>
    </Content>
  );
};

const Left = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="Table fields background"
        />
      </div>
    </div>
  );
};
