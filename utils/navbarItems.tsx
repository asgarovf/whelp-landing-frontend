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
  target?: string;
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
    link: '/integrations',
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
    link: 'https://whelp.co/blog/',
    icon: <Edit />,
    target: '_blank',
  },
  // {
  //   name: 'Help center',
  //   link: '#',
  //   icon: <Question />,
  // },
  // {
  //   name: `What's new`,
  //   link: '#',
  //   icon: <Bolt />,
  // },
  // {
  //   name: 'Watch demo',
  //   link: '#',
  //   icon: <Play />,
  // },
  {
    name: 'Status',
    link: 'https://status.whelp.co/',
    icon: <HeartRate />,
    target: '_blank',
  },
];

export const companyItems: DropdownItem[] = [
  {
    name: 'About',
    link: '/about',
    icon: <Info />,
  },
  {
    name: 'Contact',
    link: '/contact',
    icon: <Mail />,
  },
  {
    name: 'Privacy policy',
    link: '/privacy-policy',
    icon: <Shield />,
  },
  {
    name: 'Terms of service',
    link: '/terms-of-service',
    icon: <FileText />,
  },
];
