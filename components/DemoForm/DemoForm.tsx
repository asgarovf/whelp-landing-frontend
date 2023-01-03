import { CheckCircle } from 'assets/icons';
import FormImage from 'assets/images/request-demo/form.png';
import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useGlobalStore } from 'store/global';
import { Button, Header, Icon, Input, Select, Text } from 'ui';
import { clsnm } from 'utils/clsnm';
import {
  SelectOption,
  industryOptions,
  jobFunctionOptions,
  teamSizeOptions,
} from 'utils/teamSizeOptions';
import { isEmpty } from 'utils/validators';

import styles from './DemoForm.module.scss';

declare let window: Window & any;

export enum Page {
  FORM,
  CALENDLY,
  SUCCESS,
}

export const DemoForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    company: '',
  });
  const calendlyRef = useRef<HTMLDivElement>(null);

  const [teamSize, setTeamSize] = useState<SelectOption | null>(null);
  const [industry, setIndustry] = useState<SelectOption | null>(null);
  const [jobFunction, setJobFunction] = useState<SelectOption | null>(null);

  const [page, setPage] = useState<Page>(Page.FORM);

  const { initializedCalendly } = useGlobalStore();

  const stateChanger = (e: BaseSyntheticEvent) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const isDisabled = useMemo(() => {
    const c1 = isEmpty(state.name);
    const c2 = isEmpty(state.email);
    const c3 = isEmpty(state.company);
    const c4 = isEmpty(teamSize?.value ?? '');
    const c5 = isEmpty(jobFunction?.value ?? '');
    const c6 = isEmpty(industry?.value ?? '');

    return c1 || c2 || c3 || c4 || c5 || c6;
  }, [state, teamSize, jobFunction, industry]);

  const onSubmitForm = useCallback(() => {
    setPage(Page.CALENDLY);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (calendlyRef.current == null) return;

    if (initializedCalendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/getwhelp/demo',
        parentElement: calendlyRef.current,
      });
    }
  }, [initializedCalendly]);

  function isCalendlyEvent(e: any) {
    return (
      e.origin === 'https://calendly.com' &&
      e.data.event &&
      e.data.event.indexOf('calendly.') === 0
    );
  }

  useEffect(() => {
    const fn = (e: any) => {
      if (isCalendlyEvent(e)) {
        if (e.data.event === 'calendly.event_scheduled') {
          setPage(Page.SUCCESS);
        }
      }
    };

    window.addEventListener('message', fn);
    return () => {
      window.removeEventListener('message', fn);
    };
  }, []);

  useEffect(() => {
    return () => {
      setPage(Page.FORM);
    };
  }, []);

  return (
    <div
      className={clsnm(
        styles.wrapper,
        page !== Page.SUCCESS && styles.maxHeight,
      )}
    >
      {page === Page.FORM && (
        <div className={styles.formWrapper}>
          <div className={clsnm(styles.image, styles.image)}>
            <img src={FormImage.src} alt="Form background" />
          </div>

          <div className={styles.form}>
            <Header as="h1" inheritStyles="h1" className={styles.header}>
              Request a demo
            </Header>
            <Text subtext>
              See how your customer support can transform into a lively, timely
              and super-efficient service with the tools and features we offer.
            </Text>

            <div className={styles.formGrid}>
              <Input
                value={state.name}
                onChange={stateChanger}
                name="name"
                placeholder="Your full name"
                label="Name*"
                inheritDefaultStyles
              />
              <Input
                value={state.email}
                onChange={stateChanger}
                name="email"
                placeholder="example@company.com"
                label="Work email*"
                inheritDefaultStyles
              />
              <Input
                value={state.company}
                onChange={stateChanger}
                name="company"
                placeholder="Company*"
                label="Company Inc.*"
                inheritDefaultStyles
              />
              <Select
                activeKey={teamSize?.key}
                onChange={(value) => {
                  setTeamSize(value);
                }}
                options={teamSizeOptions}
                value={teamSize?.value}
                inputProps={{
                  placeholder: 'Select',
                  label: 'Team size*',
                }}
              />
              <Select
                activeKey={industry?.key}
                onChange={(value) => {
                  setIndustry(value);
                }}
                options={industryOptions}
                value={industry?.value}
                inputProps={{
                  placeholder: 'Select',
                  label: 'Industry*',
                }}
              />
              <Select
                activeKey={jobFunction?.key}
                onChange={(value) => {
                  setJobFunction(value);
                }}
                options={jobFunctionOptions}
                value={jobFunction?.value}
                inputProps={{
                  placeholder: 'Select',
                  label: 'Job function*',
                }}
              />
            </div>
            <Button
              onClick={onSubmitForm}
              disabled={isDisabled}
              color="black"
              className={styles.submit}
            >
              Continue
            </Button>
          </div>
        </div>
      )}

      <div
        className={clsnm(
          styles.calendlyWrapper,
          page !== Page.CALENDLY && 'd-none',
        )}
        ref={calendlyRef}
      ></div>

      {page === Page.SUCCESS && (
        <div className={styles.successWrapper}>
          <div className={styles.circle}>
            <Icon size={32}>
              <CheckCircle />
            </Icon>
          </div>
          <span className={styles.head}>
            You’ve successfully submited demo request
          </span>
          <Text className={styles.text} subtext>
            Your request is taken. We will get back to you as soon as possible!
          </Text>

          <Button href="/" className={styles.button} color="black">
            Back to homepage
          </Button>
        </div>
      )}
    </div>
  );
};
