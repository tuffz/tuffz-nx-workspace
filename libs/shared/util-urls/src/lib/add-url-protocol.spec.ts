import { addUrlProtocol } from './add-url-protocol';

describe('addUrlProtocol', () => {
  const testCases: [string, string, string][] = [
    ['without protocol: domain.tld', 'tuffz.com', 'https://tuffz.com'],
    [
      'without protocol: subdomain.domain.tld',
      'www.tuffz.com',
      'https://www.tuffz.com',
    ],

    ['with http protocol: domain.tld', 'http://tuffz.com', 'http://tuffz.com'],
    [
      'with http protocol: subdomain.domain.tld',
      'http://www.tuffz.com',
      'http://www.tuffz.com',
    ],

    [
      'with https protocol: domain.tld',
      'https://tuffz.com',
      'https://tuffz.com',
    ],
    [
      'with https protocol: subdomain.domain.tld',
      'https://www.tuffz.com',
      'https://www.tuffz.com',
    ],
  ];

  test.each(testCases)('%s', (title, url, expectedUrl) => {
    expect(addUrlProtocol(url)).toBe(expectedUrl);
  });
});
