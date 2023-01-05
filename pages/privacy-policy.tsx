import { DocumentHead, Footer, Navbar } from 'components';
import styles from 'styles/pages/PrivacyPolicy.module.scss';
import { Container, Header, Layout, Text } from 'ui';

export default function PrivacyPolicy() {
  return (
    <>
      <DocumentHead
        title="Privacy policy"
        description="Our privacy policy explains how we collect, use, and protect customer data to ensure the privacy and security of our users."
      />
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <Header as="h1" inheritStyles="hero" className={styles.head}>
            Privacy policy
          </Header>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Introduction
            </Header>
            <Text className={styles.text}>
              Welcome to Whelp, Inc. (“Whelp”, "we", "us" and "our"). Whelp
              provides software and services that unify your email, customer
              communication channels, and apps in one platform, helping
              teammates work better together. The “Websites” means Whelp’s
              websites (including without limitation www.getwhelp.com,
              web.getwhelp.com, app.getwhelp.com and any successor URLs, mobile
              or localized versions and related domains and subdomains), and the
              “Services” means Whelp’s products, applications, and services, in
              each case in whatever format they may be offered now or in the
              future.
            </Text>
          </Container>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Purpose of this Privacy Policy
            </Header>
            <Text className={styles.text}>
              The purpose of this “Privacy Policy” is to inform you of the type
              of personal data we collect when you use our Services, why we
              collect the data, how it is used and your rights and choices. If
              you do not agree with this Privacy Policy, do not access or use
              our Services.
            </Text>
          </Container>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Personal Data We Collect
            </Header>
            <Text className={styles.text}>
              Personal Data that you provide to us: When you register for a
              Whelp account you are required to provide certain basic contact
              information, such as your name, and email address, and telephone
              number. If you are registering for a paid account you will also be
              required to provide payment information, such as payment card
              details (collected by our payment service provider) as well as
              other information that you voluntarily choose to add to your
              account profile, like a profile photo or a timezone. We will
              inform you when requesting your Personal Data, if certain data
              must be provided or if it is optional. We will also inform you of
              the consequences should you not wish to provide this data. We also
              collect the information that you may choose to submit to our
              customer support team, for example regarding a problem you are
              experiencing with our Services. This may include your contact
              information, a summary of the problem you are experiencing, and
              any other documentation or information that would be helpful in
              resolving the issue. <br /> <br />
              Automatically collected data: When you interact with Whelp through
              the Services, we automatically collect information about you
              through cookies (small text files placed on your device), mobile
              device identifier and other technologies. Please read the
              “Cookies” section below to learn more about how we use cookies and
              other technologies. When you visit our Websites, our servers
              record information (“log data”), including information that your
              browser automatically sends whenever you visit the Website. This
              log data includes your Internet Protocol (“IP”) address (from
              which we understand the country you are connecting from at the
              time you visit the Site), browser type and settings, the date and
              time of your request. <br /> <br />
              Data from other services you link to your account: In order to
              perform tasks that are part of the Services we require you to
              integrate your third-party email service with your Services
              account. Doing so provides us with access to your email account(s)
              and the content included therein. You authorize this access by
              agreeing to this Privacy Policy and providing any consent required
              by your email provider. We receive information about you when you
              or your administrator integrate or link a third-party service with
              our Services. You or your administrator may also integrate other
              third party services you use with and into our Services. For
              example, you may authorize our Services to access and display
              messages from within an instant messaging application, or to
              access and display files from a third-party document sharing
              service. The information we receive when you integrate our
              Services with a third-party service depends on the settings,
              permissions and privacy policy associated with that third-party
              service. Please check the privacy settings and privacy policy of
              these third-party services to understand what data may be
              disclosed to and shared with us.
            </Text>
          </Container>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Data Security
            </Header>
            <Text className={styles.text}>
              We take all necessary precautions, as well as appropriate
              organizational and technical measures, to maintain the security,
              integrity, and confidentiality of your Personal Data, and in
              particular to prevent it from being altered or damaged and to
              prevent any unauthorized third party from accessing it. We also
              use secured payment systems consistent with the state of the art
              and the applicable laws and regulations.
            </Text>
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
