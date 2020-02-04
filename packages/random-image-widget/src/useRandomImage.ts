import { useState, useEffect } from 'react';

interface UseRandomImageOptions {
  /** Url of the API server/serverless endpoint */
  apiUrl: string;
}

export default function useRandomImage({ apiUrl }: UseRandomImageOptions) {
  const [randomImage, setRandomImage] = useState<string>('');
  const [err, setErr] = useState<string>();

  useEffect(() => {
    let wasCancelled = false;
    (async () => {
      try {
        const res = await fetch(`${apiUrl}`).then(res => res.json());
        if (!res.image) {
          if (!wasCancelled) {
            setErr(`API response invalid.`);
          }
          return;
        } else if (!wasCancelled) {
          setRandomImage(res.image);
        }
      } catch {
        setErr('API server not reachable.');
      }
    })();
    return () => {
      wasCancelled = true;
    };
  });

  return { image: randomImage, err };
}
