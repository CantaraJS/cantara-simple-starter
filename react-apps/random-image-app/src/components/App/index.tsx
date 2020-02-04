import React from 'react';
import RandomImageWidget from 'random-image-widget';

import {
  appContainer,
  waveContainer,
  creditsContainer,
} from './index.module.css';

import cantaraLogo from './cantara.svg';
import waveImg from './wave.svg';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <div className={appContainer}>
        <div className={creditsContainer}>
          <div>
            <h1>App created with</h1>
          </div>
          <img
            src={cantaraLogo}
            alt="Cantara - Create Fullstack React Apps with TypeScript!"
          />
        </div>
        <RandomImageWidget
          apiUrl={process.env.RANDOM_IMAGE_API_URL as string}
        />
      </div>
      <div className={waveContainer}>
        <img src={waveImg} alt="Wave" />
      </div>
    </>
  );
};

export default App;
