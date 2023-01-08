import { animated, useSpring } from '@react-spring/web';
import { ChevronDown, ChevronUp } from 'assets/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment, useRef, useState } from 'react';
import { Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import { ButtonDropdownItems, MainMenuItem } from 'components/Navbar/Navbar';

import styles from './Navbar.module.scss';

type Props = { close: () => void };

export const NavbarSm = ({ close }: Props) => {
  const router = useRouter();
  const _styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const productRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  const [toggleState, setToggleState] = useState({
    [MainMenuItem.PRODUCT]: false,
    [MainMenuItem.SOLUTIONS]: false,
    [MainMenuItem.RESOURCES]: false,
    [MainMenuItem.PRICING]: false,
    [MainMenuItem.COMPANY]: false,
  });

  const mapKeyToRef = {
    [MainMenuItem.PRODUCT]: productRef,
    [MainMenuItem.SOLUTIONS]: solutionsRef,
    [MainMenuItem.RESOURCES]: resourcesRef,
    [MainMenuItem.PRICING]: pricingRef,
    [MainMenuItem.COMPANY]: companyRef,
  };

  return (
    <animated.div className={clsnm(styles.navbarSmall)} style={_styles}>
      {ButtonDropdownItems.map((item) => (
        <Fragment key={item.key}>
          <div
            onClick={() => {
              const newValue = !toggleState[item.key];
              setToggleState({
                ...toggleState,
                [item.key]: newValue,
              });
              setTimeout(() => {
                mapKeyToRef[item.key].current?.scrollIntoView({
                  block: 'center',
                  behavior: 'smooth',
                });
              }, 100);
              if (item.link != null) {
                router.push(item.link);
              }
            }}
            key={item.key}
            className={styles.smallItemWrapper}
          >
            <div className={styles.smallItem}>
              <Text className={styles.smallText}>{item.name}</Text>
              {item.items != null && (
                <Icon size={24} className={styles.smallIcon}>
                  {toggleState[item.key] ? <ChevronUp /> : <ChevronDown />}
                </Icon>
              )}
            </div>
          </div>
          {item.items != null && (
            <div
              ref={mapKeyToRef[item.key]}
              className={clsnm(
                !toggleState[item.key] && 'd-none',
                styles.navigationMenu,
              )}
            >
              {item.items?.map((i, key) => (
                <Link key={key} href={i.link} legacyBehavior>
                  <div onClick={close} className={styles.navigationMenuItem}>
                    <Icon size={24} className={styles.navigationMenuItemIcon}>
                      {i.icon}
                    </Icon>
                    <Text className={styles.navigationMenuItemText}>
                      {i.name}
                    </Text>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </animated.div>
  );
};
