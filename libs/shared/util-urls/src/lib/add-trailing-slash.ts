import { hasUrlProtocol } from './has-url-protocol';

/**
 * Adds a trailing slash to the URL if it only contains the domain and no subfolder.
 *
 * @param url The URL to modify.
 * @returns The modified URL with a trailing slash if applicable.
 */
export const addTrailingSlash = (url: string): string => {
  const hasProtocol = hasUrlProtocol(url);
  const hasPath = url.substring(hasProtocol ? 8 : 0).includes('/');

  if (!hasPath && !url.endsWith('/')) {
    return url + '/';
  }

  return url;
};
