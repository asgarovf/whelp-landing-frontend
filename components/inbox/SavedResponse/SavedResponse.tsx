import BackgroundImage from 'assets/images/inbox/saved-response/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './SavedResponse.module.scss';

export const SavedResponse = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      reverseOnMobile
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
      <Header inheritStyles="h1" as="h3">
        Saved Responses
      </Header>
      <Text className={styles.subtext} subtext>
        Use saved responses to quickly and efficiently respond to common
        customer inquiries.
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
          alt="Saved response inbox background"
        />
      </div>
    </div>
  );
};
