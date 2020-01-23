import http from 'http';
import generateLuckyNumber from './generate';

const server = http.createServer((request, response) => {
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Request-Method', '*');
  response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  response.setHeader('Access-Control-Allow-Headers', '*');
  if (request.method === 'OPTIONS') {
    response.writeHead(200);
    response.end();
    return;
  }

  const userApiKey = request.headers['x-api-key'];
  if (userApiKey !== process.env.LUCKY_NUMBER_SERVER_API_KEY) {
    response.writeHead(401, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'Not authorized' }));
    return;
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify({ number: generateLuckyNumber() }));
});
server.listen(3001, () => {
  console.log('Server listening on port 3001');
});
