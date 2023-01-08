import { ArrowRight, Mail, Map, Phone } from 'assets/icons';
import { useGap } from 'hooks';
import { Header, Icon, Text } from 'ui';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './Contact.module.scss';

export const Contact = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 96,
  });

  return (
    <DualGrid
      className={styles.wrapper}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const items = [
  {
    name: 'Email',
    value: 'hello@whelp.co',
    icon: <Mail />,
    href: 'mailto:hello@whelp.co',
    target: '_blank',
  },
  {
    name: 'Phone',
    value: '217-3748272',
    icon: <Phone />,
    href: 'tel:+12173748272',
    target: '_blank',
  },
  {
    name: 'Address',
    value: 'New York, United States',
    icon: <Map />,
    href: 'https://goo.gl/maps/ALxAG8dv2DUzBjir6',
    target: '_blank',
  },
];

const Left = () => {
  return (
    <div className={styles.content}>
      <Header className={styles.header} as="h1" inheritStyles="hero">
        Contact us
      </Header>
      <Text className={styles.text} subtext>
        For inquiries or support related to Whelp, please contact us using the
        form on this page or use the provided email address and phone number to
        contact us directly.
      </Text>
      <div className={styles.items}>
        {items.map((item) => {
          return (
            <a
              referrerPolicy="no-referrer"
              href={item.href}
              target={item.target}
              key={item.name}
              className={styles.item}
            >
              <div className={styles.icon}>
                <Icon size={24}>{item.icon}</Icon>
              </div>
              <div className={styles.itemContent}>
                <Text className={styles.name}>{item.name}</Text>
                <Text className={styles.value} subtext>
                  {item.value}
                </Text>
              </div>
              <Icon className={styles.arrowRight}>
                <ArrowRight />
              </Icon>
            </a>
          );
        })}
      </div>
    </div>
  );
};

const Right = () => {
  return <ContactForm />;
};
