import {
  AppStore,
  ChartBar,
  ChatCircleText,
  Inbox,
  Shield,
  Users,
} from 'assets/icons';
import { FeatureItem } from 'types';
import {
  companyItems,
  productItems,
  resourcesItems,
  solutionItems,
} from 'utils/navbarItems';

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
    items: productItems,
  },
  {
    header: 'Solutions',
    items: solutionItems,
  },
  {
    header: 'Resources',
    items: resourcesItems,
  },
  {
    header: 'Company',
    items: companyItems,
  },
  {
    header: 'Compare',
    items: [
      {
        name: 'Intercom',
        link: '/',
      },
      {
        name: 'Zendesk',
        link: '/',
      },
      {
        name: 'HubSpot',
        link: '/',
      },
      {
        name: 'Livechat',
        link: '/',
      },
    ],
  },
];
