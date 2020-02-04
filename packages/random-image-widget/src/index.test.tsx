import React from 'react';
import { render, wait } from '@testing-library/react';
import RandomImage from 'random-image-widget';

(global as any).fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ image: 'https://source.unsplash.com' }),
  });
});

test('Display a random image from unsplash', async () => {
  const RANDOM_IMG_CONTAINER_ID = 'random-image-container';
  const { getByTestId } = render(<RandomImage apiUrl="http://example.com" />);

  await wait(() => getByTestId(RANDOM_IMG_CONTAINER_ID));
  expect(getByTestId(RANDOM_IMG_CONTAINER_ID)).toHaveStyle(
    'background-image: url(https://source.unsplash.com)',
  );
});
