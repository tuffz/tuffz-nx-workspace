import { addTrailingSlash } from './add-trailing-slash';

interface TestCase {
  url: string;
  expectedUrl: string;
}

describe('addTrailingSlash', () => {
  const testCases: TestCase[] = [
    {
      url: 'tuffz.com',
      expectedUrl: 'tuffz.com/',
    },
    {
      url: 'www.tuffz.com',
      expectedUrl: 'www.tuffz.com/',
    },
    {
      url: 'tuffz.com/',
      expectedUrl: 'tuffz.com/',
    },
    {
      url: 'www.tuffz.com/',
      expectedUrl: 'www.tuffz.com/',
    },
    {
      url: 'https://tuffz.com',
      expectedUrl: 'https://tuffz.com/',
    },
    {
      url: 'https://www.tuffz.com',
      expectedUrl: 'https://www.tuffz.com/',
    },
    {
      url: 'https://tuffz.com/',
      expectedUrl: 'https://tuffz.com/',
    },
    {
      url: 'https://www.tuffz.com/',
      expectedUrl: 'https://www.tuffz.com/',
    },
    {
      url: 'https://tuffz.com/folder',
      expectedUrl: 'https://tuffz.com/folder',
    },
    {
      url: 'https://www.tuffz.com/folder/',
      expectedUrl: 'https://www.tuffz.com/folder/',
    },
  ];

  describe.each(testCases)('$url', ({ url, expectedUrl }) => {
    test(`returns ${expectedUrl}`, () => {
      expect(addTrailingSlash(url)).toBe(expectedUrl);
    });
  });
});
