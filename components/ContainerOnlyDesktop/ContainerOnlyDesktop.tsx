import { ReactNode } from 'react';
import { Container } from 'ui';

import styles from './ContainerOnlyDesktop.module.scss';

type Props = {
  children: ReactNode;
};

export const ContainerOnlyDesktop = ({ children }: Props) => {
  return (
    <>
      <Container className={styles.lg}>{children}</Container>
      <div className={styles.sm}>{children}</div>
    </>
  );
};
