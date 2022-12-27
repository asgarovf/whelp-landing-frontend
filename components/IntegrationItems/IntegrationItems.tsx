import { IntegrationItem } from 'utils/integrations';

import styles from './IntegrationItems.module.scss';

type Props = {
  items: IntegrationItem[];
};

export const IntegrationItems = ({ items }: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.map((item, key) => (
        <div key={key} className={styles.item}>
          <div></div>
        </div>
      ))}
    </div>
  );
};
