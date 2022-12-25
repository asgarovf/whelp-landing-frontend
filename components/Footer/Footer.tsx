import { Facebook, Instagram, Linkedin, Twitter } from 'assets/icons';
import LogoSm from 'assets/images/logo-sm.svg';
import Link from 'next/link';
import { ComponentPropsWithoutRef } from 'react';
import { Button, Container, Header, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import { footerData } from 'utils/data';

import styles from './Footer.module.scss';

interface Props extends ComponentPropsWithoutRef<'div'> {
  include?: boolean;
}

export const Footer = ({ include = true }: Props) => {
  return (
    <>
      {include && (
        <div className={styles.topWrapper}>
          <Container width={588}>
            <Header className={styles.topHeader} as="h4" inheritStyles="h1">
              Get started now!
            </Header>
            <Text className={styles.topText} subtext>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              elit eu mauris lobortis fringilla a eu lectus.
            </Text>
            <div className={styles.buttons}>
              <Button className={styles.button} color="black">
                Get started
              </Button>
              <Button className={styles.button} color="transparent">
                View pricing
              </Button>
            </div>
          </Container>
        </div>
      )}

      <div className={styles.bottomWrapper}>
        <Container className={styles.content}>
          <div className={styles.logo}>
            <LogoSm />
          </div>
          <div className={styles.columns}>
            {footerData.map((item, index) => (
              <div key={index} className={styles.col}>
                <Text className={styles.colHeader}>{item.header}</Text>
                <div className={styles.colItems}>
                  {item.items.map((item, key) => (
                    <Link
                      key={key}
                      href={item.link}
                      referrerPolicy="no-referrer"
                      className={clsnm(styles.colText, 'poppins')}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className={styles.copyRight}>
        <Container className={styles.copyRightContent}>
          <Text subtext>Copyright © 2022, Whelp, Inc.</Text>
          <div className={styles.social}>
            <a href="#">
              <Icon size={24}>
                <Facebook />
              </Icon>
            </a>
            <a href="#">
              <Icon size={24}>
                <Instagram />
              </Icon>
            </a>
            <a href="#">
              <Icon size={24}>
                <Twitter />
              </Icon>
            </a>
            <a href="#">
              <Icon size={24}>
                <Linkedin />
              </Icon>
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};
