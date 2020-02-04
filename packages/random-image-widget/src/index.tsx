import React from 'react';
import { randomImageContainer, randomImageOverlay } from './index.module.css';
import useRandomImage from './useRandomImage';

interface Props {
  apiUrl: string;
}

const RandomImageWidget: React.FC<Props> = ({ apiUrl }) => {
  const { image: randomImage, err } = useRandomImage({ apiUrl });
  const isLoading = !!!randomImage && !err;

  return (
    <div
      data-testid="random-image-container"
      className={randomImageContainer}
      style={isLoading ? {} : { backgroundImage: `url(${randomImage})` }}
    >
      <div className={randomImageOverlay}>
        {err ? (
          <span>
            <b>{err}</b>
            <br />
            Make sure that the API server was started
          </span>
        ) : (
          <span>
            Random Image from
            <br />
            <a href="https://www.unsplash.com" target="_blank">
              Unsplash
            </a>
          </span>
        )}
      </div>
    </div>
  );
};

export default RandomImageWidget;
