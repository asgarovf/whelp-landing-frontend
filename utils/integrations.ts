import AmazonConnect from 'assets/images/integrations/amazon-connect.png';
import DoneTracker from 'assets/images/integrations/done-tracker.png';
import EmailSignature from 'assets/images/integrations/email-signature.png';
import Email from 'assets/images/integrations/email.png';
import Facebook from 'assets/images/integrations/facebook.png';
import Instagram from 'assets/images/integrations/instagram.png';
import Iyzico from 'assets/images/integrations/iyzico.png';
import Line from 'assets/images/integrations/line.png';
import Livechat from 'assets/images/integrations/livechat.png';
import Paylike from 'assets/images/integrations/paylike.png';
import Paytabs from 'assets/images/integrations/paytabs.png';
import Razorpay from 'assets/images/integrations/razorpay.png';
import Salesforce from 'assets/images/integrations/salesforce.png';
import Shopify from 'assets/images/integrations/shopify.png';
import ShortLinks from 'assets/images/integrations/short-links.png';
import Stripe from 'assets/images/integrations/stripe.png';
import Telegram from 'assets/images/integrations/telegram.png';
import Telr from 'assets/images/integrations/telr.png';
import Twilio from 'assets/images/integrations/twilio.png';
import Viber from 'assets/images/integrations/viber.png';
import Webex from 'assets/images/integrations/webex.png';
import Whatsapp from 'assets/images/integrations/whatsapp.png';
import { StaticImageData } from 'next/image';

export enum IntegrationCategory {
  'CHANNEL' = 'Channel integrations',
  'PAYMENT' = 'Payments & Accounting',
  'ANALYTICS' = 'Analytics',
  'CRM' = 'CRM',
  'OTHER' = 'Other',
}

export type IntegrationItem = {
  name: string;
  category: IntegrationCategory;
  image: StaticImageData;
};

export const IntegrationsData: IntegrationItem[] = [
  { name: 'Facebook', category: IntegrationCategory.CHANNEL, image: Facebook },
  {
    name: 'Instagram',
    category: IntegrationCategory.CHANNEL,
    image: Instagram,
  },
  { name: 'Whatsapp', category: IntegrationCategory.CHANNEL, image: Whatsapp },
  { name: 'Telegram', category: IntegrationCategory.CHANNEL, image: Telegram },
  { name: 'Twilio', category: IntegrationCategory.CHANNEL, image: Twilio },
  { name: 'Shopify', category: IntegrationCategory.CRM, image: Shopify },
  { name: 'Stripe', category: IntegrationCategory.PAYMENT, image: Stripe },
  { name: 'Line', category: IntegrationCategory.CHANNEL, image: Line },
  { name: 'Viber', category: IntegrationCategory.CHANNEL, image: Viber },
  {
    name: 'Salesforce',
    category: IntegrationCategory.CRM,
    image: Salesforce,
  },
  { name: 'Webex', category: IntegrationCategory.CHANNEL, image: Webex },
  { name: 'Email', category: IntegrationCategory.CHANNEL, image: Email },
  { name: 'Livechat', category: IntegrationCategory.CHANNEL, image: Livechat },
  {
    name: 'Amazon Connect',
    category: IntegrationCategory.CHANNEL,
    image: AmazonConnect,
  },
  { name: 'Razorpay', category: IntegrationCategory.PAYMENT, image: Razorpay },
  { name: 'Iyzico', category: IntegrationCategory.PAYMENT, image: Iyzico },
  { name: 'Paylike', category: IntegrationCategory.PAYMENT, image: Paylike },
  {
    name: 'Short links',
    category: IntegrationCategory.OTHER,
    image: ShortLinks,
  },
  { name: 'Paytabs', category: IntegrationCategory.PAYMENT, image: Paytabs },
  { name: 'Telr', category: IntegrationCategory.PAYMENT, image: Telr },
  {
    name: 'Email signature',
    category: IntegrationCategory.OTHER,
    image: EmailSignature,
  },
  {
    name: 'Done tracker',
    category: IntegrationCategory.ANALYTICS,
    image: DoneTracker,
  },
];
