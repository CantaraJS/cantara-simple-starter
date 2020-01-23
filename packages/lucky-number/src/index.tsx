import React, { useState, useEffect } from 'react';

interface Props {
  apiKey: string;
}

const LuckyNumber: React.FC<Props> = ({ apiKey }) => {
  const [luckyNumber, setLuckyNumber] = useState<number>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let wasCancelled = false;
    (async () => {
      const res = await fetch('http://localhost:3001', {
        headers: {
          'x-api-key': apiKey,
        },
      }).then(res => res.json());
      if (!wasCancelled) {
        if (res.number) {
          setLuckyNumber(res.number);
        }
        if (res.error) {
          setError(res.error);
        }
      }
    })();

    return () => {
      wasCancelled = true;
    };
  }, []);

  if (error) {
    return <b>Error: {error}</b>;
  }

  if (luckyNumber === undefined || luckyNumber === null) {
    return <div>Loading your lucky number...</div>;
  }

  return (
    <div>
      Your Lucky Number: <b>{luckyNumber}</b>
    </div>
  );
};

export default LuckyNumber;
