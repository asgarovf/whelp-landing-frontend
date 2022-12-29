import { DocumentHead, Footer, Navbar } from 'components';
import styles from 'styles/pages/TermsOfService.module.scss';
import { Container, Header, Layout, Text } from 'ui';

export default function TermsOfService() {
  return (
    <>
      <DocumentHead title="Terms of service" />
      <Layout>
        <Navbar />
        <div className={styles.wrapper}>
          <Header as="h1" inheritStyles="hero" className={styles.head}>
            Terms of service
          </Header>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Account Terms
            </Header>
            <Text className={styles.text}>
              You must be a human. Accounts registered by “bots” or other
              automated methods are not permitted. <br /> <br />
              You must provide your full legal name, a valid email address, and
              any other required information to complete the sign-up process.
              <br /> <br />
              You are responsible for maintaining the privacy and security of
              your account. Whelp will not be held liable for any damage or loss
              that may result from your failure to protect your login
              information, including your password.
              <br /> <br />
              One person or legal entity may not maintain more than one free
              account.
              <br /> <br />
              Whelp may communicate with you via email or pushed notifications
              regarding your account, system updates, or other issues related to
              your account.
              <br /> <br />
              You are responsible for all Content send and activity that occurs
              under your account (even when Content is sent by others to your
              account).
              <br /> <br />
              You may not use Whelp for any illegal or unauthorized purpose. You
              must not, in the use of Whelp, violate any laws in your
              jurisdiction (including but not limited to copyright laws). Your
              login details may be used up to a maximum of five concurrent
              sessions. <br /> <br />
              Whelp may refuse service to anyone for any reason at any time.{' '}
              <br /> <br />
            </Text>
          </Container>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Payment and Access
            </Header>

            <Text className={styles.text}>
              A valid credit card is required for paying accounts. <br /> <br />
              Free accounts are not required to provide a credit card number.{' '}
              <br /> <br />
              Should you upgrade or downgrade your premium plan, you will be
              charged your new billing rate immediately. <br /> <br />
              The Whelp Service is billed in advance in accordance with our
              pricing schedule and all monthly payments are nonrefundable.{' '}
              <br /> <br />
              There will be no refunds or credits for partial months of service,
              upgrade/downgrade refunds, or refunds for months unused with an
              open account. In order to treat everyone equally, no exceptions
              will be made. <br /> <br />
              Our company policy is to not extend discounts for a period of more
              than 12 months. <br /> <br />
              All fees are exclusive of all taxes, levies, or duties imposed by
              taxing authorities, and you shall be responsible for payment of
              all such taxes, levies, or duties, excluding only United States
              (federal or state) taxes. You agree to pay for any such taxes that
              might be applicable to your use of Whelp and payments made by you
              herein. <br /> <br />
            </Text>
          </Container>
          <Container className={styles.container}>
            <Header poppins as="h3" className={styles.header}>
              Modifications to the Service and Fees
            </Header>
            <Text className={styles.text}>
              Whelp reserves the right to modify, suspend, or discontinue the
              Service at any time for any reason with or without notice.
              <br /> <br />
              Whelp reserves the right to change our monthly/annually fees upon
              30 days notice from us. The fee change will be notified per email
              to all our subscribers and will be reflected on the pricing page
              at getwhelp.com/pricing.
              <br /> <br />
              Whelp reserves the right to update and change the Terms of Service
              from time to time without notice. Any new features that augment or
              enhance the current Service, including the release of new tools
              and resources, shall be subject to the Terms of Service.
              <br /> <br />
            </Text>
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  );
}
