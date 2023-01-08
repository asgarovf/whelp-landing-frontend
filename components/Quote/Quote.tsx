import Image, { StaticImageData } from 'next/image';
import { Container, Header, Text } from 'ui';
import { clsnm } from 'utils/clsnm';

import styles from './Quote.module.scss';

type Props = {
  content: string;
  title: string;
  position: string;
  image: StaticImageData;
  className?: string;
};

export const Quote = ({
  title,
  content,
  position,
  image,
  className,
}: Props) => {
  return (
    <div className={clsnm(styles.wrapper, className)}>
      <Container width={800} className={styles.container}>
        <Header className={styles.quote} as="h3">
          {content}
        </Header>
        <Image className={styles.image} src={image} alt="Seymur Rasulov" />
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.position}>{position}</Text>
      </Container>
    </div>
  );
};
