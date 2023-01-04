import { CheckCircle } from 'assets/icons';
import { Button, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './Success.module.scss';

type Props = {
  fullWidth?: boolean;
  text?: string;
};

export const Success = ({
  fullWidth = false,
  text = 'You’ve successfully submited demo request',
}: Props) => {
  return (
    <div
      className={clsnm(styles.successWrapper, fullWidth && styles.fullWidth)}
    >
      <div className={styles.circle}>
        <Icon size={32}>
          <CheckCircle />
        </Icon>
      </div>
      <span className={styles.head}>{text}</span>
      <Text className={styles.text} subtext>
        Your request is taken. We will get back to you as soon as possible!
      </Text>

      <Button href="/" className={styles.button} color="black">
        Back to homepage
      </Button>
    </div>
  );
};
