import Logo from 'assets/images/logo.svg';
import Image from 'next/image';
import { Container } from 'ui';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.logo}>
          <Image width={126} height={28} src={Logo.src} alt="Logo" />
        </div>
      </Container>
    </div>
  );
};
