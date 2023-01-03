export type SelectOption = {
  label: string;
  key: string;
  value: any;
};

export const teamSizeOptions = [
  { value: '1-100', label: '1-100', key: '1-100' },
  { value: '101-200', label: '101-200', key: '101-200' },
  { value: '201-600', label: '201-600', key: '201-600' },
  { value: '601-1500', label: '601-1500', key: '601-1500' },
  { value: '1500+', label: '1500+', key: '1500+' },
];

export const industryOptions = [
  { value: 'Tourism', label: 'Tourism', key: 'Tourism' },
  {
    value: 'Hotels and resorts',
    label: 'Hotels and resorts',
    key: 'Hotels and resorts',
  },
  { value: 'Banking', label: 'Banking', key: 'Banking' },
  { value: 'Shopping', label: 'Shopping', key: 'Shopping' },
  { value: 'Restaurant', label: 'Restaurant', key: 'Restaurant' },
  { value: 'Other', label: 'Other', key: 'Other' },
];

export const jobFunctionOptions = [
  {
    value: 'Project manager',
    label: 'Project manager',
    key: 'Project manager',
  },
  { value: 'Product owner', label: 'Product owner', key: 'Product owner' },
  { value: 'Developer', label: 'Developer', key: 'Developer' },
  { value: 'Designer', label: 'Designer', key: 'Designer' },
  {
    value: 'Sales representative',
    label: 'Sales representative',
    key: 'Sales representative',
  },
  { value: 'Tester', label: 'Tester', key: 'Tester' },
  { value: 'Other', label: 'Other', key: 'Other' },
];
