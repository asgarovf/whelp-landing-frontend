import DashboardImage from 'assets/images/crm/dashboard/dashboard.png';
import { Container, Header, Text } from 'ui';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <Header className={styles.header} as="h2">
            All in one dashboard
          </Header>
          <Text className={styles.text} subtext>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et elit
            eu mauris lobortis fringilla a eu lectus.
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
