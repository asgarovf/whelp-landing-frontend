import LogoImage from 'assets/images/logo.svg';
import Link from 'next/link';
import { Button, Container } from 'ui';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <Link href="/">
            <Logo />
          </Link>
          <div className={styles.buttons}>
            <Button href="hello" height="48px" color="flat">
              Sign In
            </Button>
            <Button height="48px" style={{ marginLeft: '8px' }} color="black">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Logo = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logoInner}>
        <LogoImage />
      </div>
    </div>
  );
};
