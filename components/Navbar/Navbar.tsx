import { ChevronDown, ChevronUp } from 'assets/icons';
import LogoImage from 'assets/images/logo.svg';
import Tip from 'assets/images/tip.svg';
import Link from 'next/link';
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Container, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import {
  DropdownItem,
  productItems,
  resourcesItems,
  solutionItems,
} from 'utils/navbarItems';

import styles from './Navbar.module.scss';

enum MainMenuItem {
  PRODUCT,
  SOLUTIONS,
  RESOURCES,
  PRICING,
  COMPANY,
}

export const Navbar = () => {
  const [expandedMenu, setExpandedMenu] = useState<MainMenuItem | null>(null);

  const timeoutRef = useRef<any>(null);

  const onMouseEnterMenuitem = (e: any, item: MainMenuItem) => {
    setExpandedMenu(item);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setExpandedMenu(null);
    }, 1000);
  };

  const ButtonDropdownItems = [
    {
      key: MainMenuItem.PRODUCT,
      items: productItems,
      name: 'Product',
    },
    {
      key: MainMenuItem.SOLUTIONS,
      items: solutionItems,
      name: 'Solutions',
    },
    {
      key: MainMenuItem.RESOURCES,
      items: resourcesItems,
      name: 'Resources',
    },
    {
      key: MainMenuItem.PRICING,
      items: undefined,
      name: 'Pricing',
    },
    {
      key: MainMenuItem.COMPANY,
      items: productItems,
      name: 'Company',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.linksWrapper}>
            <Link href="/">
              <Logo />
            </Link>
            <div className={styles.links}>
              {ButtonDropdownItems.map((item) => (
                <ButtonDropdown
                  key={item.key}
                  dropdownProps={{
                    onMouseEnter: (e) => {
                      onMouseEnterMenuitem(e, item.key);
                    },
                    onMouseLeave,
                  }}
                  active={expandedMenu === item.key}
                  dropdownItems={item.items}
                >
                  {item.name}
                </ButtonDropdown>
              ))}
            </div>
          </div>

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

const ButtonDropdown = ({
  dropdownItems,
  children,
  active,
  dropdownProps,
}: {
  dropdownItems?: DropdownItem[];
  children: ReactNode;
  active: boolean;
  dropdownProps?: ComponentPropsWithoutRef<'div'>;
}) => {
  return (
    <div className={styles.dropdownWrapper}>
      <div {...dropdownProps} className={styles.dropdown}>
        <Text
          className={clsnm(
            styles.text,
            dropdownItems != null && styles.marginRight,
          )}
        >
          {children}
        </Text>
        {dropdownItems != null && (
          <Icon>{active ? <ChevronUp /> : <ChevronDown />}</Icon>
        )}
      </div>
      {active && dropdownItems != null && (
        <div className={styles.menu}>
          <div className={styles.tip}>
            <Tip />
          </div>
          {dropdownItems.map((item) => (
            <Link key={item.name} href={item.link}>
              <div className={styles.link}>
                <Icon>{item.icon}</Icon>
                <Text className={styles.linkText}>{item.name}</Text>
              </div>
            </Link>
          ))}
        </div>
      )}
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
