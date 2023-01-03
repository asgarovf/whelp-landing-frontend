import BackgroundImage from 'assets/images/crm/manage-contacts/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './ManageContacts.module.scss';

export const ManageContacts = () => {
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
        Easily manage your customer contacts
      </Header>
      <Text className={styles.subtext} subtext>
        Our platform makes it simple to add, edit, and delete customer contacts
        as needed.
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
          alt="Manage contacts background"
        />
      </div>
    </div>
  );
};
