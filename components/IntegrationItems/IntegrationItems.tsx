import { Search } from 'assets/icons';
import Image from 'next/image';
import { Icon, Text } from 'ui';
import { IntegrationItem } from 'utils/integrations';

import styles from './IntegrationItems.module.scss';

type Props = {
  items: IntegrationItem[];
  search: string;
  itemLimit?: number;
};

export const IntegrationItems = ({
  items,
  search,
  itemLimit = Infinity,
}: Props) => {
  return (
    <div className={styles.wrapper}>
      {items.slice(0, itemLimit).map((item, index) => {
        return (
          <div key={index} className={styles.item}>
            <div className={styles.itemImage}>
              <Image src={item.image} alt={item.name} />
            </div>
            <Text className={styles.name}>{item.name}</Text>
            <Text className={styles.category} subtext>
              {item.category}
            </Text>
          </div>
        );
      })}
      {items.length === 0 && (
        <div className={styles.emptyState}>
          <div className={styles.searchWrapper}>
            <Icon className={styles.searchIcon}>
              <Search />
            </Icon>
          </div>
          <Text
            className={styles.result}
          >{`We didn’t find anything for "${search}"`}</Text>
          <Text subtext className={styles.subResult}>
            Try searching something else
          </Text>
        </div>
      )}
    </div>
  );
};
