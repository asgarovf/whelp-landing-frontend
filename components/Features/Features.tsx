import { FeatureItem } from 'types';
import { Icon } from 'ui';

import styles from './Features.module.scss';

type Props = {
  items: FeatureItem[];
};

export const Features = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <div
            className={styles.iconWrapper}
            style={{
              backgroundColor: `var(--wh-${item.color}-5)`,
              color: `var(--wh-${item.color}-90)`,
            }}
          >
            <Icon size={32}>{item.icon}</Icon>
          </div>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.content}>{item.content}</span>
        </div>
      ))}
    </div>
  );
};
