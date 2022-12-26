import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { mergeRefs } from 'react-merge-refs';
import { FeatureItem } from 'types';
import { Icon } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './Features.module.scss';

type Props = {
  items: FeatureItem[];
};

export const Features = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, index) => (
        <FeatureItemRenderer item={item} index={index} />
      ))}
    </div>
  );
};

export const FeatureItemRenderer = ({
  index,
  item,
}: {
  index: number;
  item: FeatureItem;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [observerRef, inview] = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (ref.current == null) return;
    if (inview) {
      ref.current.classList.add(styles[`fadeIn${index}`]);
    }
  }, [inview]);

  return (
    <div
      ref={mergeRefs([observerRef, ref])}
      key={index}
      className={clsnm(styles.item)}
    >
      <div
        className={clsnm(styles.iconWrapper)}
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
  );
};
