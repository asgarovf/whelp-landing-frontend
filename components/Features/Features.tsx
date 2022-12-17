import { FeatureItem } from 'types';

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
            style={{ backgroundColor: item.color }}
          >
            {item.icon}
          </div>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.content}>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
