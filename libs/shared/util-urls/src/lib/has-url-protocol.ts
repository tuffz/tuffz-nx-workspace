/**
 * Checks if the URL starts with a protocol (http:// or https://).
 *
 * @param url The URL to check.
 * @returns True if the URL starts with http:// or https://, false otherwise.
 */
export const hasUrlProtocol = (url: string): boolean => {
  if (!url || typeof url !== 'string') {
    // return false for null, undefined, or non-string values
    return false;
  }

  return url.startsWith('http://') || url.startsWith('https://');
};
