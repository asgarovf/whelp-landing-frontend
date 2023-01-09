import { Check, CloseNew } from 'assets/icons';
import { useState } from 'react';
import { Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './Comparison.module.scss';

type Props = {
  data: {
    feature: string;
    whelp: boolean;
    other: boolean;
  }[];
  compareTo: string;
};

export const Comparison = ({ data, compareTo }: Props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        <div
          onClick={() => setTab(0)}
          className={clsnm(styles.tab, tab === 0 && styles.active)}
        >
          <Text className={styles.text}>Whelp</Text>
        </div>
        <div
          onClick={() => setTab(1)}
          className={clsnm(styles.tab, tab === 1 && styles.active)}
        >
          <Text className={styles.text}>{compareTo}</Text>
        </div>
      </div>

      <div className={styles.header}>
        <div className={styles.featureHeader}></div>
        <div className={styles.featureHeaderUs}>
          <span>Whelp</span>
        </div>
        <div className={styles.featureHeaderOther}>
          <span>{compareTo}</span>
        </div>
      </div>
      {data.map((item, key) => (
        <div className={styles.row} key={key}>
          <div className={styles.col1}>
            <span>{item.feature}</span>
          </div>
          <div className={styles.col2}>
            <Icon
              className={item.whelp ? styles.check : styles.times}
              size={28}
            >
              {item.whelp ? <Check /> : <CloseNew />}
            </Icon>
          </div>
          <div className={styles.col3}>
            <Icon
              className={item.other ? styles.check : styles.times}
              size={28}
            >
              {item.other ? <Check /> : <CloseNew />}
            </Icon>
          </div>

          <div className={styles.col4}>
            <Icon
              className={item.other ? styles.check : styles.times}
              size={28}
            >
              {tab === 0 ? (
                <>{item.whelp ? <Check /> : <CloseNew />}</>
              ) : (
                <>{item.other ? <Check /> : <CloseNew />}</>
              )}
            </Icon>
          </div>
        </div>
      ))}
      <div className={styles.footer}>
        <div className={styles.featureFooter}></div>
        <div className={styles.featureFooterUs}></div>
        <div className={styles.featureFooterOther}></div>
      </div>
    </div>
  );
};
