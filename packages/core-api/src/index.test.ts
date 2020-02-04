import RandomImageAPI from 'core-api';

it('should retrieve a random image', async () => {
  const coreApi = new RandomImageAPI({
    apiKey: process.env.RANDOM_IMAGE_API_KEY as string,
  });
  const randomImage = await coreApi.get();
  expect(randomImage).toBeDefined();
  expect(typeof randomImage).toBe('string');
});
