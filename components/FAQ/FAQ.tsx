import { animated, useSpring } from '@react-spring/web';
import { MinusCircle, PlusCircle } from 'assets/icons';
import { useState } from 'react';
import { Header, Icon, Text } from 'ui';

import styles from './FAQ.module.scss';

const QUESTIONS = [
  {
    q: 'Does Whelp provide APIs?',
    a: 'How long does it take to start using Whelp?',
  },
  {
    q: 'How does Whelp work?',
    a: 'It only takes a few minutes to get started with Whelp. Simply click the "Get Started" button, register, and connect your desired apps and channels.',
  },
  {
    q: 'What is the first step to begin using Whelp?',
    a: 'The first step is to click the "Get Started" button, register for an account, and connect the apps and channels you want to use with Whelp.',
  },
  {
    q: 'What are the security and privacy terms for Whelp?',
    a: 'Whelp offers on-premises solutions for ultimate security, and all cloud connections are end-to-end encrypted. Two-factor authentication is also available.',
  },
  {
    q: 'What are the pricing options for Whelp?',
    a: 'Pricing is based on the size of your business, with options available to suit companies of all sizes.',
  },
  {
    q: 'Are there any technical requirements to use Whelp?',
    a: 'No, there are no technical requirements to use Whelp.',
  },
  {
    q: 'Is installation or downloading required?',
    a: 'No, installation or downloading is not required. Whelp can be accessed directly through your web browser.',
  },
  {
    q: 'Does Whelp offer customized solutions for businesses?',
    a: 'Yes, Whelp can work with you to develop a customized solution for your specific business needs.',
  },
  {
    q: 'How many conversations does my subscription cover?',
    a: 'No, every subscription comes with unlimited conversations, so you can connect with your customers as often as you need.',
  },
  {
    q: 'Is it possible to cancel my subscription at any time?',
    a: 'Yes, you can cancel your subscription at any time by contacting our team. Simply reach out to us and let us know that you would like to cancel your subscription. Your subscription will continue to include the features and limits of your current plan until the end of the billing cycle.',
  },
  {
    q: 'Are volume discounts available for large businesses?',
    a: 'Yes, we offer customized packages for Enterprise customers who anticipate needing a higher volume of Monthly Active Contacts than what is available in our Team or Business plans. If you are interested in learning more about these customized packages, please get in touch with us and we would be happy to tailor a package to your specific needs.',
  },
];

export const FAQ = () => {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header as="h4">Frequently asked questions</Header>
      <div className={styles.questions}>
        {QUESTIONS.map((item, index) => (
          <div
            onClick={() => {
              if (active === index) {
                setActive(-1);
              } else {
                setActive(index);
              }
            }}
            key={item.q}
            className={styles.question}
          >
            <div className={styles.header}>
              <Text className={styles.text}>{item.q}</Text>
              <Icon className={styles.icon} size={24}>
                {active === index ? <MinusCircle /> : <PlusCircle />}
              </Icon>
            </div>
            {active === index && <Answer answer={item.a} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const Answer = ({ answer }: { answer: string }) => {
  const _styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div className={styles.answer} style={_styles}>
      <Text subtext className={styles.answer}>
        {answer}
      </Text>
    </animated.div>
  );
};
