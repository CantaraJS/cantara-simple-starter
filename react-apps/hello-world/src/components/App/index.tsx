import React from 'react';
import LuckyNumber from 'lucky-number';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <h1>This app was created with Cantara.</h1>
      <LuckyNumber apiKey={process.env.LUCKY_NUMBER_CLIENT_API_KEY as string} />
    </div>
  );
};

export default App;
