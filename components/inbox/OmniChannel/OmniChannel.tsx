import Facebook from 'assets/images/channels/facebook.png';
import Instragram from 'assets/images/channels/instagram.png';
import Line from 'assets/images/channels/line.png';
import Telegram from 'assets/images/channels/telegram.png';
import Twitter from 'assets/images/channels/twitter.png';
import Viber from 'assets/images/channels/viber.png';
import Whatsapp from 'assets/images/channels/whatsapp.png';
import { Header, Text } from 'ui';

import styles from './OmniChannel.module.scss';

export const OmniChannel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Header className={styles.header} as="h2">
          Truly omnichannel
        </Header>
        <Text className={styles.text} subtext>
          Communicate with your customers on their preferred channels, including
          SMS, voice, WhatsApp, WeChat, Messenger, email, and live chat.
        </Text>
      </div>
      <div className={styles.channels}>
        <div className={styles.channelWrapper}>
          <img
            className={styles.image}
            src={Facebook.src}
            alt="Facebook channel"
          />
          <img
            className={styles.image}
            src={Twitter.src}
            alt="Twiiter channel"
          />
          <img
            className={styles.image}
            src={Whatsapp.src}
            alt="Whatsapp channel"
          />
          <img
            className={styles.image}
            src={Instragram.src}
            alt="Instragram channel"
          />
          <img
            className={styles.image}
            src={Telegram.src}
            alt="Telegram channel"
          />
          <img className={styles.image} src={Viber.src} alt="Viber channel" />
          <img className={styles.image} src={Line.src} alt="Line channel" />

          <img
            className={styles.image}
            src={Facebook.src}
            alt="Facebook channel 2"
          />
          <img
            className={styles.image}
            src={Twitter.src}
            alt="Email channel 2"
          />
          <img
            className={styles.image}
            src={Whatsapp.src}
            alt="Twitter channel 2"
          />
          <img
            className={styles.image}
            src={Instragram.src}
            alt="Image channel"
          />
          <img
            className={styles.image}
            src={Telegram.src}
            alt="Telegram channel 2"
          />
          <img className={styles.image} src={Viber.src} alt="Viber channel 2" />
          <img className={styles.image} src={Line.src} alt="Line channel 2" />

          <img
            className={styles.image}
            src={Facebook.src}
            alt="Facebook channel 3"
          />
          <img
            className={styles.image}
            src={Twitter.src}
            alt="Email channel 3"
          />
          <img
            className={styles.image}
            src={Whatsapp.src}
            alt="Whatsapp channel 3"
          />
          <img
            className={styles.image}
            src={Instragram.src}
            alt="Instagram channel"
          />
          <img className={styles.image} src={Telegram.src} alt="Tg channel 3" />
          <img className={styles.image} src={Viber.src} alt="Viber channel 3" />
          <img className={styles.image} src={Line.src} alt="Line channel 3" />
        </div>
      </div>
    </div>
  );
};
