import DashboardImage from 'assets/images/crm/dashboard/dashboard.png';
import { Container, Header, Text } from 'ui';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Header inheritStyles="h1" className={styles.header} as="h2">
            All your customer data and communication channels in one place
          </Header>
          <Text className={styles.text} subtext>
            The dashboard consolidates all of your customer data and
            communication channels in one location, making it easy to access and
            manage everything you need.
          </Text>
          <div className={styles.imageWrapper}>
            <img
              className={styles.image}
              alt="Dashboard image"
              src={DashboardImage.src}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
