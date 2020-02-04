import followerRedirects from 'follow-redirects';

interface RandomImageConstructorOptions {
  apiKey: string;
}

export default class RandomImageAPI {
  private apiKey: string;

  constructor({ apiKey }: RandomImageConstructorOptions) {
    this.apiKey = apiKey;
  }

  /** Get a random image */
  get(): Promise<string> {
    if (!this.apiKey) {
      // This code will never be executed,
      // but it's just here to demonstrate
      // how to use env vars with
      // Cantara
      throw new Error('API_KEY_NO_SET');
    }
    return new Promise(resolve => {
      followerRedirects.https.get(
        'https://source.unsplash.com/random',
        response => {
          resolve(response.responseUrl);
        },
      );
    });
  }
}
