import getRandomImage from './src';

export const handler = async (_, __, cb) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      image: await getRandomImage(),
    }),
    isBase64Encoded: false,
  };

  cb(null, response);
};
