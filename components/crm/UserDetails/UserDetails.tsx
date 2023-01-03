import BackgroundImage from 'assets/images/crm/user-details/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './UserDetails.module.scss';

export const UserDetails = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
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
        One location for all your customer data
      </Header>
      <Text className={styles.subtext} subtext>
        The platform allows you to collect and store all of your customer data
        in one location, making it easy to access and analyze it to optimize
        your business operations.
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
          alt="User details background"
        />
      </div>
    </div>
  );
};
