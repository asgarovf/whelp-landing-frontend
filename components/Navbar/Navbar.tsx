import Logo from 'assets/images/logo.svg';
import Image from 'next/image';
import { Button, Container } from 'ui';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <Image width={126} height={28} src={Logo.src} alt="Logo" />
          </div>

          <div className={styles.buttons}>
            <Button height="48px" color="black">
              Hello
            </Button>
            <Button
              height="48px"
              style={{ marginLeft: '8px' }}
              color="transparent"
            >
              Hello
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
