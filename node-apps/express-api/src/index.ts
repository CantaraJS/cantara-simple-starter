import express from 'express';
import cors from 'cors';
import RandomImageAPI from 'core-api';

function main() {
  const port = process.env.PORT || 3001;
  const app = express();
  app.use(cors());

  const coreApi = new RandomImageAPI({
    apiKey: process.env.RANDOM_IMAGE_API_KEY as string,
  });

  app.get('/', async (_, res) => {
    res.json({ image: await coreApi.get() });
  });

  app.listen(port, () => {
    console.log(`API server listening on ::${port}`);
  });
}

main();
