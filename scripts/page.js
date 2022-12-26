const fs = require('fs');
const { exit } = require('process');

const args = process.argv.slice(2);

if (args.length != 4) {
  console.error('Invalid args');
  exit(1);
}

const base = args[0];
const fileName = args[1];
const short = args[2];
const leftOrRight = args[3];

console.log(args);

const FILE_SHORT = short;
const FILE1 = fileName;
const FILE2 = fileName;
const FILE3 = fileName;

function createImageLeftComponent() {
  const folderRoot = `../components/${base}/${fileName}`;

  if (!fs.existsSync(folderRoot)) {
    fs.mkdirSync(folderRoot);
  } else {
    console.error('Folder exists');
    exit(1);
  }

  fs.writeFileSync(
    `${folderRoot}/${fileName}.tsx`,
    leftImageTemplateTSX,
    (err) => {
      console.log(err);
    },
  );

  fs.writeFileSync(
    `${folderRoot}/${fileName}.module.scss`,
    leftImageTemplateSCSS,
    (err) => {
      console.log(err);
    },
  );
}

function createImageRightComponent() {
  const folderRoot = `../components/${base}/${fileName}`;

  if (!fs.existsSync(folderRoot)) {
    fs.mkdirSync(folderRoot);
  } else {
    console.error('Folder exists');
    exit(1);
  }

  fs.writeFileSync(
    `${folderRoot}/${fileName}.tsx`,
    rightImageTemplateTSX,
    (err) => {
      console.log(err);
    },
  );

  fs.writeFileSync(
    `${folderRoot}/${fileName}.module.scss`,
    rightImageTemplateSCSS,
    (err) => {
      console.log(err);
    },
  );
}

function addToIndex() {
  const indexRoot = `../components/index.ts`;

  const textToAppend = `export { ${fileName} } from './${base}/${fileName}/${fileName}';  `;

  fs.appendFileSync(indexRoot, textToAppend, (err) => {
    console.log(err);
  });
}

const leftImageTemplateTSX = `import BackgroundImage from 'assets/images/${base}/${FILE_SHORT}/left.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Icon, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './${FILE1}.module.scss';

export const ${FILE2} = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      reverseOnMobile
      paddingY={80}
      rightClassName={styles.right}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Right = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h3">
        Manage all your conversations in one place
      </Header>
      <Text className={styles.subtext} subtext>
        We created a single inbox across phone, email, chat and messaging apps
        to manage and respond to all conversations.
      </Text>
    </Content>
  );
};

const Left = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="${FILE3} background"
        />
      </div>
    </div>
  );
};
`;

const rightImageTemplateTSX = `import BackgroundImage from 'assets/images/${base}/${FILE_SHORT}/right.png';
import { useGap } from 'hooks';
import Image from 'next/image';
import { Content, Header, Text } from 'ui';

import { DualGrid } from 'components/DualGrid/DualGrid';

import styles from './${FILE1}.module.scss';

export const ${FILE2} = () => {
  const gap = useGap({
    small: 40,
    medium: 40,
    large: 24,
  });

  return (
    <DualGrid
      paddingY={80}
      leftClassName={styles.left}
      gap={gap}
      left={<Left />}
      right={<Right />}
    />
  );
};

const Left = () => {
  return (
    <Content>
      <Header inheritStyles="h1" as="h2">
        CRM that you’ve been looking for
      </Header>
      <Text className={styles.subtext} subtext>
        Upgrade your customer support with our features. We collect all of your
        user data on one platform.
      </Text>
    </Content>
  );
};

const Right = () => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.inner}>
        <Image
          className={styles.imageBg}
          src={BackgroundImage}
          alt="${FILE3} background"
        />
      </div>
    </div>
  );
};
`;

const leftImageTemplateSCSS = `@import 'styles/vars.scss';

.subtext {
  margin-top: 20px;
  max-width: 85%;

  @media (max-width: $bp-sm) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
}

.right {
  justify-content: center;
  padding-left: 80px;

  @media (max-width: $bp-md) {
    padding-left: 60px;
  }

  @media (max-width: $bp-sm) {
    padding-left: 0px;
  }
}

.imageWrapper {
  display: flex;
  width: 100%;
  justify-content: center;

  & .inner {
    display: flex;
    position: relative;
  }

  & .imageBg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
`;

const rightImageTemplateSCSS = `@import 'styles/vars.scss';

.subtext {
  margin-top: 20px;
  max-width: 85%;

  @media (max-width: $bp-sm) {
    align-items: center;
    text-align: center;
    max-width: 100%;
  }
}

.button {
  margin-top: 32px;
}

.left {
  justify-content: center;
  padding-right: 96px;

  @media (max-width: $bp-md) {
    padding-right: 60px;
  }

  @media (max-width: $bp-sm) {
    padding-right: 0px;
  }
}

.imageWrapper {
  display: flex;
  width: 100%;
  justify-content: center;

  & .inner {
    display: flex;
    position: relative;
  }

  & .imageBg {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
`;

if (leftOrRight === 'left') {
  createImageLeftComponent();
} else {
  createImageRightComponent();
}
addToIndex();
