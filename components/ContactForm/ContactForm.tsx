import { apiCreateContact } from 'queries';
import { ContactCreateDto } from 'queries/types';
import {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useMutation } from 'react-query';
import { Button, Input, Select, TextArea } from 'ui';
import { SelectOption, teamSizeOptions } from 'utils/teamSizeOptions';
import { isEmail, isEmpty } from 'utils/validators';

import { Success } from 'components/Success/Success';

import styles from './ContactForm.module.scss';

export enum Page {
  FORM,
  SUCCESS,
}

export const ContactForm = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [page, setPage] = useState<Page>(Page.FORM);

  const [state, setState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [teamSize, setTeamSize] = useState<SelectOption | null>(null);

  const stateChanger = (e: BaseSyntheticEvent) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const isDisabled = useMemo(() => {
    const c1 = isEmpty(state.name);
    const c2 = isEmpty(state.email);
    const c3 = isEmpty(state.company);
    const c4 = isEmpty(teamSize?.value ?? '');
    // const c5 = checked.value === false;
    const c6 = !isEmail(state.email);

    return c1 || c2 || c3 || c4 || c6;
  }, [state, teamSize]);

  const contactMutation = useMutation({
    mutationFn: (data: ContactCreateDto) => apiCreateContact(data),
    mutationKey: ['CONTACT_MUTATION'],
    onSuccess: () => {
      setPage(Page.SUCCESS);
    },
  });

  const onSubmit = useCallback(() => {
    const payload = {
      ...state,
      team_size: teamSize?.value,
    };

    contactMutation.mutate(payload);
  }, []);

  useEffect(() => {
    if (page === Page.SUCCESS) {
      setTimeout(() => {
        if (successRef.current == null) return;
        successRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 500);
    }
  }, [page]);

  return (
    <>
      {page === Page.FORM && (
        <div ref={parentRef} className={styles.wrapper}>
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
          </div>
          <div className={styles.bottom}>
            <TextArea
              name="message"
              value={state.message}
              onChange={stateChanger}
              label="Message"
              placeholder="Enter your message"
              forwardedRef={textAreaRef}
            />
            {/* <Checkbox
              className={styles.checkbox}
              label="I agree to Whelp???s rules and accept"
              checked={checked.value}
              onClick={checked.toggle}
            /> */}
            <Button
              loading={contactMutation.isLoading}
              onClick={onSubmit}
              disabled={isDisabled}
              className={styles.button}
              color="black"
            >
              Submit
            </Button>
          </div>
        </div>
      )}
      {page === Page.SUCCESS && (
        <div ref={successRef} className={styles.success}>
          <Success fullWidth text={'You???ve successfully submited the form'} />
        </div>
      )}
    </>
  );
};
