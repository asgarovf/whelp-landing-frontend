import { NextSeo } from 'next-seo';

type Props = {
  title: string;
};

export const DocumentHead = ({ title }: Props) => {
  return (
    <NextSeo
      title={`Whelp - Customer Support Platform | ${title}`}
      description="The AI-based omnichannel shared inbox for customer support over Voice, Email, Live Chat, SMS, and WhatsApp."
      defaultTitle="Whelp - Customer Support Platform"
      themeColor="#FEFBF6"
    />
  );
};
