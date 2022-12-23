import {
  AppStore,
  Bot,
  ChartBar,
  Chats,
  Clipboard,
  Inbox,
  Navigation,
  Users,
} from 'assets/icons';
import { ReactNode } from 'react';

export type DropdownItem = {
  name: string;
  link: string;
  icon: ReactNode;
};

export const productItems: DropdownItem[] = [
  {
    name: 'Inbox',
    link: '#',
    icon: <Inbox />,
  },
  {
    name: 'CRM',
    link: '#',
    icon: <Users />,
  },
  {
    name: 'Reporting',
    link: '#',
    icon: <ChartBar />,
  },
  {
    name: 'Chatbot',
    link: '#',
    icon: <Bot />,
  },
  {
    name: 'Outbound',
    link: '#',
    icon: <Navigation />,
  },
  {
    name: 'Integrations',
    link: '#',
    icon: <AppStore />,
  },
  {
    name: 'Livechat',
    link: '#',
    icon: <Chats />,
  },
  {
    name: 'CSAT',
    link: '#',
    icon: <Clipboard />,
  },
];

export const solutionItems: DropdownItem[] = [
  {
    name: 'E-commerce',
    link: '#',
    icon: <AppStore />,
  },
  {
    name: 'Startup',
    link: '#',
    icon: <Chats />,
  },
  {
    name: 'Enterprise',
    link: '#',
    icon: <Clipboard />,
  },
];

export const resourcesItems: DropdownItem[] = [
  {
    name: 'Blog',
    link: '#',
    icon: <AppStore />,
  },
  {
    name: 'Help center',
    link: '#',
    icon: <Chats />,
  },
  {
    name: `What's new`,
    link: '#',
    icon: <Clipboard />,
  },
  {
    name: 'Watch demo',
    link: '#',
    icon: <Clipboard />,
  },
  {
    name: 'Status',
    link: '#',
    icon: <Clipboard />,
  },
];

export const companyItems: DropdownItem[] = [
  {
    name: 'About',
    link: '#',
    icon: <AppStore />,
  },
  {
    name: 'Contact',
    link: '#',
    icon: <Chats />,
  },
  {
    name: 'Privacy policy',
    link: '#',
    icon: <Clipboard />,
  },
  {
    name: 'Terms of servcice',
    link: '#',
    icon: <Clipboard />,
  },
];
