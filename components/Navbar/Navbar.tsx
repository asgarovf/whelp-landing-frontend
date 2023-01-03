import { ChevronDown, ChevronUp } from 'assets/icons';
import LogoImage from 'assets/images/logo.svg';
import Tip from 'assets/images/tip.svg';
import { Cross as Hamburger } from 'hamburger-react';
import { useBoolean, useOnClickOutside } from 'hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Button, Container, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import { getSigninUrl } from 'utils/getSigninUrl';
import { getSignupUrl } from 'utils/getSignupUrl';
import {
  DropdownItem,
  companyItems,
  productItems,
  resourcesItems,
  solutionItems,
} from 'utils/navbarItems';

import { NavbarSm } from 'components/Navbar/NavbarSm';

import styles from './Navbar.module.scss';

export enum MainMenuItem {
  PRODUCT,
  SOLUTIONS,
  RESOURCES,
  PRICING,
  COMPANY,
}

export const ButtonDropdownItems = [
  {
    key: MainMenuItem.PRODUCT,
    items: productItems,
    name: 'Product',
  },
  // {
  //   key: MainMenuItem.SOLUTIONS,
  //   items: solutionItems,
  //   name: 'Solutions',
  // },
  {
    key: MainMenuItem.RESOURCES,
    items: resourcesItems,
    name: 'Resources',
  },
  {
    key: MainMenuItem.PRICING,
    items: undefined,
    name: 'Pricing',
    link: '/pricing',
  },
  {
    key: MainMenuItem.COMPANY,
    items: companyItems,
    name: 'Company',
  },
];

export const Navbar = () => {
  const [expandedMenu, setExpandedMenu] = useState<MainMenuItem | null>(null);
  const timeoutRef = useRef<any>(null);
  const navbarController = useBoolean();
  const navbarRef = useOnClickOutside<HTMLDivElement>(() => {
    setExpandedMenu(null);
  });

  const onMouseEnterMenuitem = (_: any, item: MainMenuItem) => {
    setExpandedMenu(item);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const onMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setExpandedMenu(null);
    }, 200);
  };

  useEffect(() => {
    if (navbarController.value) {
      document.body.classList.add('overflow-hidden-sm');
    } else {
      document.body.classList.remove('overflow-hidden-sm');
    }
  }, [navbarController.value]);

  useEffect(() => {
    const onScroll = () => {
      if (navbarRef.current == null) return;
      if (window.scrollY > 100) {
        navbarRef.current.classList.add(styles.scrolled);
      } else {
        navbarRef.current.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={navbarRef}
        className={clsnm(
          styles.wrapper,
          !navbarController.value && styles.closed,
        )}
      >
        <Container className={styles.navbarContainer}>
          <div className={styles.inner}>
            <div className={styles.linksWrapper}>
              <Link onClick={navbarController.setFalse} href="/">
                <Logo />
              </Link>
              <div className={styles.links}>
                {ButtonDropdownItems.map((item) => (
                  <ButtonDropdown
                    link={item.link}
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
              <Button href={getSigninUrl()} height="48px" color="flat">
                Sign In
              </Button>
              <Button
                href={getSignupUrl()}
                height="48px"
                style={{ marginLeft: '8px' }}
                color="black"
              >
                Get Started
              </Button>
            </div>

            <div className={styles.hamburger}>
              <Hamburger
                toggled={navbarController.value}
                onToggle={navbarController.toggle}
                hideOutline
                size={24}
              />
            </div>
          </div>
        </Container>
      </div>
      {navbarController.value && <NavbarSm close={navbarController.setFalse} />}
    </>
  );
};

const ButtonDropdown = ({
  dropdownItems,
  children,
  active,
  dropdownProps,
  link,
}: {
  dropdownItems?: DropdownItem[];
  children: ReactNode;
  active: boolean;
  dropdownProps?: ComponentPropsWithoutRef<'div'>;
  link?: string;
}) => {
  const router = useRouter();

  return (
    <div {...dropdownProps} className={styles.dropdownWrapper}>
      <div
        onClick={() => {
          if (link != null) {
            router.push(link);
          }
        }}
        className={styles.dropdown}
      >
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
            <Link key={item.name} href={item.link} target={item.target}>
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
