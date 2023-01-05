import { NextSeo } from 'next-seo';

type Props = {
  title: string;
  description?: string;
};

export const DocumentHead = ({ title, description }: Props) => {
  let desc =
    'The AI-based omnichannel shared inbox for customer support over Voice, Email, Live Chat, SMS, and WhatsApp.';

  if (description != null) {
    desc += ` ${description}`;
  }

  return (
    <NextSeo
      title={`Whelp - Customer Support Platform | ${title}`}
      description={desc}
      defaultTitle="Whelp - Customer Support Platform"
      themeColor="#FEFBF6"
    />
  );
};
