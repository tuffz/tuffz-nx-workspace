import { hasUrlProtocol } from './has-url-protocol';

describe('hasUrlProtocol', () => {
  it('returns true for URLs starting with http://', () => {
    const url = 'http://example.com';
    expect(hasUrlProtocol(url)).toBe(true);
  });

  it('returns true for URLs starting with https://', () => {
    const url = 'https://example.com';
    expect(hasUrlProtocol(url)).toBe(true);
  });

  it('returns false for URLs without a protocol', () => {
    const url = 'example.com';
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for URLs starting with other schemes', () => {
    const url = 'ftp://example.com';
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for empty string', () => {
    const url = '';
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for null', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const url: any = null;
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for undefined', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const url: any = undefined;
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for non-string input', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const url: any = 123;
    expect(hasUrlProtocol(url)).toBe(false);
  });

  it('returns false for non-string object input', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const url: any = {};
    expect(hasUrlProtocol(url)).toBe(false);
  });
});
