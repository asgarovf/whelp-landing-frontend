import {
  AppStore,
  Bolt,
  Bot,
  Building,
  ChartBar,
  Chats,
  Clipboard,
  Edit,
  FileText,
  HeartRate,
  Inbox,
  Info,
  Mail,
  Navigation,
  Play,
  Question,
  Rocket,
  Shield,
  ShoppingCart,
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
    link: '/inbox',
    icon: <Inbox />,
  },
  {
    name: 'CRM',
    link: '/crm',
    icon: <Users />,
  },
  {
    name: 'Reporting',
    link: '/reporting',
    icon: <ChartBar />,
  },
  {
    name: 'Chatbot',
    link: '/chatbot',
    icon: <Bot />,
  },
  {
    name: 'Outbound',
    link: '/outbound',
    icon: <Navigation />,
  },
  {
    name: 'Integrations',
    link: '#',
    icon: <AppStore />,
  },
  // {
  //   name: 'Livechat',
  //   link: '#',
  //   icon: <Chats />,
  // },
  // {
  //   name: 'CSAT',
  //   link: '#',
  //   icon: <Clipboard />,
  // },
];

export const solutionItems: DropdownItem[] = [
  {
    name: 'E-commerce',
    link: '#',
    icon: <ShoppingCart />,
  },
  {
    name: 'Startup',
    link: '#',
    icon: <Rocket />,
  },
  {
    name: 'Enterprise',
    link: '#',
    icon: <Building />,
  },
];

export const resourcesItems: DropdownItem[] = [
  {
    name: 'Blog',
    link: '#',
    icon: <Edit />,
  },
  {
    name: 'Help center',
    link: '#',
    icon: <Question />,
  },
  {
    name: `What's new`,
    link: '#',
    icon: <Bolt />,
  },
  {
    name: 'Watch demo',
    link: '#',
    icon: <Play />,
  },
  {
    name: 'Status',
    link: '#',
    icon: <HeartRate />,
  },
];

export const companyItems: DropdownItem[] = [
  {
    name: 'About',
    link: '#',
    icon: <Info />,
  },
  {
    name: 'Contact',
    link: '#',
    icon: <Mail />,
  },
  {
    name: 'Privacy policy',
    link: '#',
    icon: <Shield />,
  },
  {
    name: 'Terms of service',
    link: '#',
    icon: <FileText />,
  },
];
