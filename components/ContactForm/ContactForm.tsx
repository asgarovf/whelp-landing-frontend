import { useBoolean } from 'hooks';
import {
  BaseSyntheticEvent,
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Button, Checkbox, Input, Select, TextArea } from 'ui';
import { SelectOption, teamSizeOptions } from 'utils/teamSizeOptions';
import { isEmail, isEmpty } from 'utils/validators';

import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const checked = useBoolean();

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

  const payload = useMemo(() => {
    return { ...state, teamSize: teamSize };
  }, [teamSize, state]);

  const isDisabled = useMemo(() => {
    const c1 = isEmpty(state.name);
    const c2 = isEmpty(state.email);
    const c3 = isEmpty(state.company);
    const c4 = isEmpty(teamSize?.value ?? '');
    const c5 = checked.value === false;
    const c6 = !isEmail(state.email);

    return c1 || c2 || c3 || c4 || c5 || c6;
  }, [state, teamSize, checked]);

  return (
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
        <Checkbox
          className={styles.checkbox}
          label="I agree to Whelp’s rules and accept"
          checked={checked.value}
          onClick={checked.toggle}
        />
        <Button disabled={isDisabled} className={styles.button} color="black">
          Submit
        </Button>
      </div>
    </div>
  );
};
