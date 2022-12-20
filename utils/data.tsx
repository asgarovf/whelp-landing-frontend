import {
  AppStore,
  ChartBar,
  ChatCircleText,
  Inbox,
  Shield,
  Users,
} from 'assets/icons';
import { FeatureItem } from 'types';

export const homeData: FeatureItem[] = [
  {
    icon: <Shield />,
    title: 'Security first',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'green',
  },
  {
    icon: <Users />,
    title: 'Team collaboration',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'purple',
  },
  {
    icon: <Inbox />,
    title: 'Omnichannel support',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'blue',
  },
  {
    icon: <ChatCircleText />,
    title: 'Automated support',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'yellow',
  },
  {
    icon: <ChartBar />,
    title: 'Analytics',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'pink',
  },
  {
    icon: <AppStore />,
    title: 'Platform integrations',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit eu mauris lobortis fringilla a eu lectus. ',
    color: 'orange',
  },
];

export const footerData = [
  {
    header: 'Products',
    items: [
      {
        name: 'Inbox',
        href: '/',
      },
      {
        name: 'CRM',
        href: '/',
      },
      {
        name: 'Reporting',
        href: '/',
      },
      {
        name: 'Chatbot',
        href: '/',
      },
      {
        name: 'Outbound',
        href: '/',
      },
      {
        name: 'Integrations',
        href: '/',
      },
      {
        name: 'Livechat',
        href: '/',
      },
      {
        name: 'CSAT',
        href: '/',
      },
    ],
  },
  {
    header: 'Solutions',
    items: [
      {
        name: 'E-commerce',
        href: '/',
      },
      {
        name: 'Startup',
        href: '/',
      },
      {
        name: 'Enterprise',
        href: '/',
      },
    ],
  },
  {
    header: 'Resources',
    items: [
      {
        name: 'Blog',
        href: '/',
      },
      {
        name: 'Help center',
        href: '/',
      },
      {
        name: "What's new",
        href: '/',
      },
      {
        name: 'Watch demo',
        href: '/',
      },
      {
        name: 'Status',
        href: '/',
      },
    ],
  },
  {
    header: 'Company',
    items: [
      {
        name: 'About',
        href: '/',
      },
      {
        name: 'Contact',
        href: '/',
      },
      {
        name: 'Privacy policy',
        href: '/',
      },
      {
        name: 'Terms of service',
        href: '/',
      },
    ],
  },
  {
    header: 'Compare',
    items: [
      {
        name: 'Intercom',
        href: '/',
      },
      {
        name: 'Zendesk',
        href: '/',
      },
      {
        name: 'HubSpot',
        href: '/',
      },
      {
        name: 'Livechat',
        href: '/',
      },
    ],
  },
];
