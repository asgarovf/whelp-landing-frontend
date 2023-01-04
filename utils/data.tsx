import {
  AppStore,
  Bot,
  Calendar,
  Category,
  ChartBar,
  ChartPie,
  ChatCircleText,
  Chats,
  Chip,
  Download,
  FileText,
  FilterFunnel,
  Folder,
  GridThreeHorizontal,
  Inbox,
  Invoice,
  Route,
  Settings,
  Shield,
  Tag,
  User,
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
      'Advanced encryption and secure access controls protect customer data on this platform.',
    color: 'green',
  },
  {
    icon: <Users />,
    title: 'Team collaboration',
    content:
      'Easily collaborate and communicate with both team members and customers across various channels with our platform.',
    color: 'purple',
  },
  {
    icon: <Inbox />,
    title: 'Omnichannel support',
    content:
      'Whelp allows businesses to reach customers through various channels, ensuring that they can communicate with customers wherever they are.',
    color: 'blue',
  },
  {
    icon: <ChatCircleText />,
    title: 'AI powered automation',
    content:
      'The chatbot on our platform automates up to 60% of customer inquiries, freeing up agents to focus on more complex issues.',
    color: 'yellow',
  },
  {
    icon: <ChartBar />,
    title: 'Analytics and reporting',
    content:
      'Analytics and reporting tools on our platform help businesses track and analyze their performance and customer interactions.',
    color: 'pink',
  },
  {
    icon: <AppStore />,
    title: 'Integration capabilities',
    content:
      'Our platform easily integrates with a wide range of other tools and platforms, streamlining integration with existing workflows.',
    color: 'orange',
  },
];

export const inboxFeatureData: FeatureItem[] = [
  {
    icon: <Folder />,
    title: 'Create folders',
    content:
      'Organize your conversations and messages with customizable folders.',
    color: 'green',
  },
  {
    icon: <Chats />,
    title: 'Real-time discussions',
    content:
      'Collaborate with your team in real-time to provide quick and efficient customer support.',
    color: 'purple',
  },
  {
    icon: <Tag />,
    title: 'Add tags',
    content:
      'Easily tag and categorize your conversations for improved organization and tracking.',
    color: 'blue',
  },
  {
    icon: <FileText />,
    title: 'Private notes',
    content:
      'Keep track of important information and notes with our private notes feature.',
    color: 'yellow',
  },
  {
    icon: <Invoice />,
    title: 'Send invoices',
    content: 'Quickly send invoices to customers directly from our platform',
    color: 'pink',
  },
  {
    icon: <Calendar />,
    title: 'Send events',
    content: 'Schedule and send events to customers through our platform.',
    color: 'orange',
  },
];

export const crmFeatureData: FeatureItem[] = [
  {
    icon: <Tag />,
    title: 'Add tags',
    content:
      'Easily categorize and organize your customer data by adding tags to their profiles.',
    color: 'green',
  },
  {
    icon: <GridThreeHorizontal />,
    title: 'Customize table',
    content:
      'Tailor the display of your customer data by selecting which columns to show or hide in your table view.',
    color: 'purple',
  },
  {
    icon: <FilterFunnel />,
    title: 'Filter your data',
    content:
      'Quickly find specific customers by filtering your data by various criteria such as location, purchase history, or tag.',
    color: 'blue',
  },
  {
    icon: <FileText />,
    title: 'Private notes',
    content:
      'Keep sensitive or confidential information about your customers securely stored with our private notes feature.',
    color: 'yellow',
  },
  {
    icon: <ChartPie />,
    title: 'Save segments',
    content:
      'Create and save segments of customers based on specific criteria, making it easy to target marketing campaigns or track performance.',
    color: 'pink',
  },
  {
    icon: <User />,
    title: 'User details',
    content:
      'View detailed information about each of your team members, including their role, permissions, and activity history.',
    color: 'orange',
  },
];

export const reportingFeatureData: FeatureItem[] = [
  {
    icon: <ChartBar />,
    title: 'Company reports',
    content:
      'View and analyze data on customer interactions, agent performance, and chatbot usage across all channels.',
    color: 'green',
  },
  {
    icon: <Users />,
    title: 'Agent reports',
    content:
      'Track and measure the productivity and performance of individual agents within your team.',
    color: 'purple',
  },
  {
    icon: <Bot />,
    title: 'Chatbot reports',
    content:
      'Monitor and analyze the effectiveness of your chatbot in automating customer inquiries and providing support.',
    color: 'blue',
  },
  {
    icon: <Tag />,
    title: 'Tag reports',
    content:
      'View and analyze data on customer interactions and performance based on tags assigned to conversations.',
    color: 'yellow',
  },
  {
    icon: <AppStore />,
    title: 'Integration Reports',
    content:
      'Monitor and analyze data on how integrations with other tools and platforms are affecting customer interactions and team productivity.',
    color: 'pink',
  },
  {
    icon: <Download />,
    title: 'Export Reports',
    content:
      'Easily export data from any report for further analysis or sharing with others.',
    color: 'orange',
  },
];

export const chatbotFeatureData: FeatureItem[] = [
  {
    icon: <Bot />,
    title: 'Live Chat',
    content:
      'Communicate with customers in real-time through our live chat feature.',
    color: 'green',
  },
  {
    icon: <Route />,
    title: 'Flow builder',
    content:
      'Create personalized chatbot flows to guide customer conversations.',
    color: 'purple',
  },
  {
    icon: <Chip />,
    title: 'Artificial Intelligence',
    content:
      'Leverage AI to automate customer interactions and improve efficiency.',
    color: 'blue',
  },
  {
    icon: <ChartBar />,
    title: 'Reporting',
    content:
      'Track and analyze chatbot performance with our comprehensive reporting tools.',
    color: 'yellow',
  },
  {
    icon: <Category />,
    title: 'Different Channels',
    content:
      'Connect with customers across various channels, including messaging apps and social media.',
    color: 'pink',
  },
  {
    icon: <FileText />,
    title: 'Export Reports',
    content:
      'Use our pre-built templates or create custom ones to streamline chatbot setup.',
    color: 'orange',
  },
];

export const outboundFeatureData: FeatureItem[] = [
  {
    icon: <Settings />,
    title: 'Automation',
    content:
      'Automate repetitive tasks and personalize your outbound messages to save time and improve customer engagement.',
    color: 'green',
  },
  {
    icon: <Category />,
    title: 'Different Channels',
    content:
      'Reach customers through various channels, including email, SMS, and messaging apps, to ensure that they can communicate with you wherever they are.',
    color: 'purple',
  },
  {
    icon: <ChartBar />,
    title: 'Reporting',
    content:
      'Track and analyze your performance and customer interactions with our analytics and reporting tools.',
    color: 'blue',
  },
  {
    icon: <Users />,
    title: 'Audience',
    content:
      'Segment and target specific audiences with our filtering tools to ensure that you are reaching the right customers with the right messages.',
    color: 'yellow',
  },
  {
    icon: <FilterFunnel />,
    title: 'Filter Your Data',
    content:
      'Use our filtering tools to segment and target specific audiences to ensure that you are reaching the right customers with the right messages.',
    color: 'pink',
  },
  {
    icon: <Folder />,
    title: 'Create folders',
    content:
      'Organize your outbound messages and campaigns with customizable folders to improve efficiency and keep your data organized.',
    color: 'orange',
  },
];

export const footerData = [
  {
    header: 'Products',
    items: productItems,
  },
  // {
  //   header: 'Solutions',
  //   items: solutionItems,
  // },
  {
    header: 'Resources',
    items: resourcesItems,
  },
  {
    header: 'Company',
    items: companyItems,
  },
  // {
  //   header: 'Compare',
  //   items: [
  //     {
  //       name: 'Intercom',
  //       link: '/',
  //     },
  //     {
  //       name: 'Zendesk',
  //       link: '/',
  //     },
  //     {
  //       name: 'HubSpot',
  //       link: '/',
  //     },
  //     {
  //       name: 'Livechat',
  //       link: '/',
  //     },
  //   ],
  // },
];
