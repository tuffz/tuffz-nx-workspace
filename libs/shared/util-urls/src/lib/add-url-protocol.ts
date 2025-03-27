import { DEFAULT_CONFIG } from './constants/default-config';
import { hasUrlProtocol } from './has-url-protocol';
import { UrlConfig } from './types/url-config';

export const addUrlProtocol = (url: string, config?: UrlConfig): string => {
  const protocol =
    config?.protocol !== undefined ? config.protocol : DEFAULT_CONFIG.protocol;

  if (protocol === null) {
    return url;
  }

  if (!hasUrlProtocol(url)) {
    return `${protocol}://${url}`;
  }

  return url;
};
