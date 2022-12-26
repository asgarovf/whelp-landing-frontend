import { animated, useSpring } from '@react-spring/web';
import { MinusCircle, PlusCircle } from 'assets/icons';
import { useState } from 'react';
import { Header, Icon, Text } from 'ui';

import styles from './FAQ.module.scss';

const QUESTIONS = [
  {
    q: 'What is Whelp?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus.',
  },
  {
    q: 'How does Whelp work?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus.',
  },
  {
    q: 'Will I be charged for additional features?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus.',
  },
  {
    q: 'How many times will I be charged?',
    a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus.',
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
