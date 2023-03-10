import { Check } from 'assets/icons';
import { useState } from 'react';
import { Button, Container, Header, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import { getSignupUrl } from 'utils/getSignupUrl';

import styles from './PricingComponent.module.scss';

export const PricingComponent = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Container>
        <Header className={styles.header} as="h1" inheritStyles="hero">
          Pick a plan. Grow faster with Whelp.
        </Header>
        <Text subtext className={styles.subtext}>
          Get started in minutes. No downloads, no software installation.
        </Text>
      </Container>
      <div className={styles.tabs}>
        <div
          onClick={() => setTab(0)}
          className={clsnm(styles.tab, tab === 0 && styles.active)}
        >
          <Text className={styles.text}>Monthly</Text>
        </div>
        <div
          onClick={() => setTab(1)}
          className={clsnm(styles.tab, tab === 1 && styles.active)}
        >
          <Text className={styles.text}>Annually</Text>
        </div>
      </div>

      <Container>
        <div className={styles.items}>
          {ITEMS.map((item, key) => (
            <div key={key} className={styles.item}>
              <span className={styles.type}>{item.type}</span>
              <span className={styles.itemSubtext}>{item.subtext}</span>
              <div className={styles.itemPrice}>
                <span className={styles.price}>
                  {tab === 0 ? item.priceMonth : item.priceYear}
                </span>
                {item.priceMonth !== 'Free' && (
                  <span className={styles.monthOrYear}>
                    {tab === 0 ? 'user / month' : 'user / month'}
                  </span>
                )}
                {item.save != null && tab === 0 && (
                  <div className={styles.save}>{item.save}</div>
                )}
                {item.saveAnnual != null && tab === 1 && (
                  <div className={styles.save}>{item.saveAnnual}</div>
                )}
              </div>
              <Button
                href={getSignupUrl()}
                className={styles.button}
                color={item.buttonType as any}
              >
                {item.buttonText}
              </Button>
              <div className={styles.itemOptions}>
                {item.items.map((item, key) => (
                  <div key={key} className={styles.option}>
                    <Icon className={styles.icon}>
                      <Check />
                    </Icon>
                    <span className={styles.optionText}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.alert}>
          <span>
            Businesses using the WhatsApp Business Platform are charged per
            conversation and monthly, these costs are not included. Learn more.
          </span>
        </div>

        <div className={styles.bottomItems}>
          <div className={styles.bottomItem}>
            <Header as="h4" className={styles.bottomItemHeader}>
              For Startups
            </Header>
            <Text className={styles.bottomItemText}>
              Our Startups pricing plan is designed for growing businesses with
              limited resources. Get access to all the features you need to
              connect with your customers and scale your business at an
              affordable price.
            </Text>
            <Button
              href="/request-demo"
              className={styles.bottomButton}
              color="black"
            >
              Request demo
            </Button>
          </div>
          <div className={styles.bottomItem}>
            <Header as="h4" className={styles.bottomItemHeader}>
              Enterprise
            </Header>
            <Text className={styles.bottomItemText}>
              Tailored for large organizations with high volume communication
              needs, our Enterprise plan offers advanced features and dedicated
              support to meet the demands of your business
            </Text>
            <Button
              href="/request-demo"
              className={styles.bottomButton}
              color="black"
            >
              Request demo
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

const ITEMS = [
  {
    type: 'Basic',
    subtext: 'Works perfect for small teams.',
    priceMonth: 'Free',
    priceYear: 'Free',
    buttonType: 'transparent',
    buttonText: 'Get started',
    save: null,
    saveAnnual: null,
    items: ['Live Chat widget for website', 'Unified inbox', 'CRM'],
  },
  {
    type: 'Standard',
    subtext: 'Great for small and medium teams.',
    priceMonth: '$29',
    priceYear: '$23',
    buttonType: 'black',
    buttonText: 'Try for free',
    save: null,
    saveAnnual: 'Save 20%',
    items: [
      'Channels: LiveChat, Facebook Messenger, Telegram, Instagram, Email',
      'Unlimited MAC',
      'Customer Data Reporting',
      'Flow Base ChatBot',
      'Reporting and analytics - PREBUILT',
      'Onboarding and adoption guidance',
      'Broadcast (Mass Messaging on WhatsApp* / SMS / Telegram / Email)',
      'Email Support',
      'Role-based permissions',
      'Customer Satisfaction Survey',
    ],
  },
  {
    type: 'Premium',
    subtext: 'Great for large teams.',
    priceMonth: '$199',
    priceYear: '$159',
    buttonType: 'black',
    buttonText: 'Try for free',
    save: 'Save 20%',
    saveAnnual: 'Save 20%',
    items: [
      'Channels: LiveChat, Messenger, Telegram, Instagram, WhatsApp (include 1 number), Twitter, SalesForce, Twilio, Viber, Amazon Connect, Email',
      'Unlimited MAC',
      'Customer Data Reporting',
      'Flow + AI Base ChatBot',
      'Reporting and analytics - PREBUILT & ADVANCED',
      'Onboarding and adoption guidance',
      'Broadcast (Mass Messaging on WhatsApp* / SMS / Telegram / Email)',
      '24/7 Support (Live, Email, Chat)',
      'Role-based permissions',
      'Customer Satisfaction Survey',
      'Agent Performance Evaluation',
      'CRM Integration',
      'IP Restriction',
      'Dedicated Account Manager',
    ],
  },
];
