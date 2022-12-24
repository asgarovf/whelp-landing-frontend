import { Footer, Navbar } from 'components';
import { Text } from 'ui';

const FourOFour = () => {
  return (
    <>
      <Navbar />
      <Text
        style={{
          height: '45vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '36px',
        }}
      >
        404 | Page Not Found
      </Text>
      <Footer />
    </>
  );
};

export default FourOFour;
