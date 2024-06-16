import { addUrlProtocol } from './add-url-protocol';
import { UrlConfig } from './types/url-config';

interface TestCase {
  url: string;
  expectedUrl: string;
  config?: UrlConfig;
}

describe('addUrlProtocol', () => {
  const DOMAIN = 'domain.tld';
  const SUBDOMAIN = 'subdomain.domain.tld';

  describe('Default Configuration', () => {
    const defaultConfigTestCases: TestCase[] = [
      {
        url: DOMAIN,
        expectedUrl: `https://${DOMAIN}`,
      },
      {
        url: SUBDOMAIN,
        expectedUrl: `https://${SUBDOMAIN}`,
      },
      {
        url: `http://${DOMAIN}`,
        expectedUrl: `http://${DOMAIN}`,
      },
      {
        url: `http://${SUBDOMAIN}`,
        expectedUrl: `http://${SUBDOMAIN}`,
      },
      {
        url: `https://${DOMAIN}`,
        expectedUrl: `https://${DOMAIN}`,
      },
      {
        url: `https://${SUBDOMAIN}`,
        expectedUrl: `https://${SUBDOMAIN}`,
      },
    ];

    describe.each(defaultConfigTestCases)(
      '$url',
      ({ url, expectedUrl, config }) => {
        test(`returns ${expectedUrl}`, () => {
          expect(addUrlProtocol(url, config)).toBe(expectedUrl);
        });
      },
    );
  });

  describe('Configuration with "null" Protocol', () => {
    const configNullProtocolTestCases: TestCase[] = [
      {
        url: DOMAIN,
        expectedUrl: DOMAIN,
        config: { protocol: null },
      },
      {
        url: SUBDOMAIN,
        expectedUrl: SUBDOMAIN,
        config: { protocol: null },
      },
      {
        url: `http://${DOMAIN}`,
        expectedUrl: `http://${DOMAIN}`,
        config: { protocol: null },
      },
      {
        url: `http://${SUBDOMAIN}`,
        expectedUrl: `http://${SUBDOMAIN}`,
        config: { protocol: null },
      },
      {
        url: `https://${DOMAIN}`,
        expectedUrl: `https://${DOMAIN}`,
        config: { protocol: null },
      },
      {
        url: `https://${SUBDOMAIN}`,
        expectedUrl: `https://${SUBDOMAIN}`,
        config: { protocol: null },
      },
    ];

    describe.each(configNullProtocolTestCases)(
      '$url',
      ({ url, expectedUrl, config }) => {
        test(`returns ${expectedUrl}`, () => {
          expect(addUrlProtocol(url, config)).toBe(expectedUrl);
        });
      },
    );
  });

  describe('Configuration with HTTP Protocol', () => {
    const configHttpProtocolTestCases: TestCase[] = [
      {
        url: DOMAIN,
        expectedUrl: `http://${DOMAIN}`,
        config: { protocol: 'http' },
      },
      {
        url: SUBDOMAIN,
        expectedUrl: `http://${SUBDOMAIN}`,
        config: { protocol: 'http' },
      },
      {
        url: `http://${DOMAIN}`,
        expectedUrl: `http://${DOMAIN}`,
        config: { protocol: 'http' },
      },
      {
        url: `http://${SUBDOMAIN}`,
        expectedUrl: `http://${SUBDOMAIN}`,
        config: { protocol: 'http' },
      },
      {
        url: `https://${DOMAIN}`,
        expectedUrl: `https://${DOMAIN}`,
        config: { protocol: 'http' },
      },
      {
        url: `https://${SUBDOMAIN}`,
        expectedUrl: `https://${SUBDOMAIN}`,
        config: { protocol: 'http' },
      },
    ];

    describe.each(configHttpProtocolTestCases)(
      '$url',
      ({ url, expectedUrl, config }) => {
        test(`returns ${expectedUrl}`, () => {
          expect(addUrlProtocol(url, config)).toBe(expectedUrl);
        });
      },
    );
  });

  describe('Configuration with HTTPS Protocol', () => {
    const configHttpsProtocolTestCases: TestCase[] = [
      {
        url: DOMAIN,
        expectedUrl: `https://${DOMAIN}`,
        config: { protocol: 'https' },
      },
      {
        url: SUBDOMAIN,
        expectedUrl: `https://${SUBDOMAIN}`,
        config: { protocol: 'https' },
      },
      {
        url: `http://${DOMAIN}`,
        expectedUrl: `http://${DOMAIN}`,
        config: { protocol: 'https' },
      },
      {
        url: `http://${SUBDOMAIN}`,
        expectedUrl: `http://${SUBDOMAIN}`,
        config: { protocol: 'https' },
      },
      {
        url: `https://${DOMAIN}`,
        expectedUrl: `https://${DOMAIN}`,
        config: { protocol: 'https' },
      },
      {
        url: `https://${SUBDOMAIN}`,
        expectedUrl: `https://${SUBDOMAIN}`,
        config: { protocol: 'https' },
      },
    ];
    describe.each(configHttpsProtocolTestCases)(
      '$url',
      ({ url, expectedUrl, config }) => {
        test(`returns ${expectedUrl}`, () => {
          expect(addUrlProtocol(url, config)).toBe(expectedUrl);
        });
      },
    );
  });
});
