import { ChevronDown, Close, FilterList, Search } from 'assets/icons';
import { useOnClickOutside } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { Container, Header, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './IntegrationsIntro.module.scss';

type Props = {
  category: null | string;
  search: string;
  setSearch: (to: string) => void;
};

export const IntegrationsIntro = ({ category, search, setSearch }: Props) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const outsideRef = useOnClickOutside<HTMLDivElement>(() => {
    setSearchFocused(false);
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current == null) return;
    if (searchFocused) {
      inputRef.current.focus();
    }
  }, [searchFocused]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header inheritStyles="h1" className={styles.header} as="h2">
          Explore integrations
        </Header>
        <Text className={styles.text} subtext>
          Our integrations make it easy to work with the applications your teams
          already love.
        </Text>
        <div className={styles.searchWrapper}>
          <div className={clsnm(styles.integrations, styles.box)}>
            <Icon size={24}>
              <FilterList />
            </Icon>
            {!searchFocused && (
              <>
                <span className={styles.text}>
                  {category === null ? 'All integrations' : category}
                </span>
                <Icon className={styles.chevronBottom}>
                  <ChevronDown />
                </Icon>
              </>
            )}
          </div>
          <div
            ref={outsideRef}
            onClick={() => setSearchFocused(true)}
            className={clsnm(
              styles.search,
              styles.box,
              searchFocused && styles.active,
            )}
          >
            <Icon>
              <Search />
            </Icon>
            {searchFocused && (
              <>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  ref={inputRef}
                  className={clsnm(styles.input, 'poppins')}
                />
                {search !== '' && (
                  <Icon
                    onClick={() => setSearch('')}
                    className={styles.closeIcon}
                  >
                    <Close />
                  </Icon>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
