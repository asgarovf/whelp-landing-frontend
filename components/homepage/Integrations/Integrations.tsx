import { ArrowRight } from 'assets/icons';
import IntegrationsBackgroundImage from 'assets/images/homepage/integrations/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Button, Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Integrations.module.scss';

export const Integrations = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      className={styles.bg}
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
          src={IntegrationsBackgroundImage}
          alt="Chatbot background"
        />
      </div>
    </div>
  );
};

const Left = () => {
  return (
    <Content>
      <Header as="h2">Explore integrations</Header>
      <Text className={styles.subtext} subtext>
        Our integrations make it easy to work with the applications your teams
        already love.
      </Text>
      <Button
        href="/integrations"
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
