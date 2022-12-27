import useResizeObserver from '@react-hook/resize-observer';
import {
  CheckCircle,
  ChevronDown,
  Close,
  FilterList,
  Search,
} from 'assets/icons';
import { useDropdown, useOnClickOutside } from 'hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Header, Icon, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import { IntegrationCategory } from 'utils/integrations';

import styles from './IntegrationsIntro.module.scss';

type Props = {
  category: null | IntegrationCategory;
  setCategory: (to: null | IntegrationCategory) => void;
  search: string;
  setSearch: (to: string) => void;
};

export const IntegrationsIntro = ({
  category,
  search,
  setSearch,
  setCategory,
}: Props) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const outsideRef = useOnClickOutside<HTMLDivElement>(() => {
    setSearchFocused(false);
  });
  const inputRef = useRef<HTMLInputElement>(null);
  const [placement, setPlacement] = useState<'bottom-end' | 'bottom-start'>(
    'bottom-end',
  );
  const [element, setElement] = useState<HTMLElement | null>(null);

  const isSearchActive = useMemo(() => {
    return search.trim() !== '' || searchFocused;
  }, [searchFocused, search]);

  useEffect(() => {
    setElement(window.document.body);
  }, []);

  useResizeObserver(element, () => {
    if (window.innerWidth < 768) {
      setPlacement('bottom-start');
    } else {
      setPlacement('bottom-end');
    }
  });

  useEffect(() => {
    if (inputRef.current == null) return;
    if (isSearchActive) {
      inputRef.current.focus();
      setCategory(null);
    }
  }, [isSearchActive]);

  const { close, floating, reference, popperStyles, isOpen, open, closeRef } =
    useDropdown({ placement, topDistance: 12 });

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
          <div ref={closeRef}>
            <div
              onClick={() => {
                if (!isSearchActive) {
                  open();
                }
              }}
              ref={reference}
              className={clsnm(
                styles.integrations,
                styles.box,
                isOpen && styles.active,
              )}
            >
              <Icon size={24}>
                <FilterList />
              </Icon>
              {!isSearchActive && (
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
            {isOpen && (
              <div
                ref={floating}
                style={popperStyles}
                className={styles.popper}
              >
                <div
                  onClick={() => {
                    setCategory(null);
                    close();
                  }}
                  className={styles.popperItem}
                >
                  <span>All categories</span>
                  {category == null && (
                    <Icon className={styles.icon}>
                      <CheckCircle />
                    </Icon>
                  )}
                </div>
                {Object.keys(IntegrationCategory).map((item, index) => {
                  const cat = (IntegrationCategory as any)[item];

                  return (
                    <div
                      onClick={() => {
                        setCategory(cat);
                        close();
                      }}
                      key={index}
                      className={styles.popperItem}
                    >
                      <span>{cat}</span>
                      {category === cat && (
                        <Icon className={styles.icon}>
                          <CheckCircle />
                        </Icon>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div
            ref={outsideRef}
            onClick={() => setSearchFocused(true)}
            className={clsnm(
              styles.search,
              styles.box,
              isSearchActive && styles.active,
            )}
          >
            <Icon>
              <Search />
            </Icon>
            {isSearchActive && (
              <>
                <input
                  placeholder="Search"
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
