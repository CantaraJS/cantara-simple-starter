import React from 'react';
import { render, wait } from '@testing-library/react';
import LuckyNumber from 'lucky-number';

const RENDERED_LUCKY_NUM = '34567';

(global as any).fetch = jest.fn().mockImplementation(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ number: RENDERED_LUCKY_NUM }),
  });
});

test('Display a lucky number', async () => {
  const { getByText } = render(<LuckyNumber apiKey="12345" />);

  await wait(() => getByText(RENDERED_LUCKY_NUM));
  expect(getByText(RENDERED_LUCKY_NUM)).toBeInTheDocument();
});
