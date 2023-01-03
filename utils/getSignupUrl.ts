import { isEmpty } from 'utils/validators';

export const getSignupUrl = (email?: string) => {
  let url = 'https://web.getwhelp.com/signup';

  if (email != null && !isEmpty(email)) {
    url += `?email=${email}`;
  }

  return url;
};
