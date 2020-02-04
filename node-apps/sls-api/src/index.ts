import RandomImageAPI from 'core-api';

export default function getRandomImage() {
  const coreApi = new RandomImageAPI({
    apiKey: process.env.RANDOM_IMAGE_API_KEY as string,
  });
  return coreApi.get();
}
