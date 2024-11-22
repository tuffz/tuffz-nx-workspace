import {
  generateQueryParameterString,
  isValidQueryParameter,
} from './generate-query-parameter-string';
import { QueryParameter } from './types/query-parameter';

describe('generateQueryParameterString', () => {
  it('should generate a query string from a single key-value pair', () => {
    const params: QueryParameter[] = [
      { key: 'utm_source', value: 'coding-booth.com' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe('utm_source=coding-booth.com');
  });

  it('should generate a query string from multiple key-value pairs', () => {
    const params: QueryParameter[] = [
      { key: 'utm_source', value: 'coding-booth.com' },
      { key: 'utm_medium', value: 'link' },
      { key: 'utm_campaign', value: 'crafted-with-heart' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe(
      'utm_source=coding-booth.com&utm_medium=link&utm_campaign=crafted-with-heart',
    );
  });

  it('should correctly encode special characters in keys and values', () => {
    const params: QueryParameter[] = [
      { key: 'utm source', value: 'coding booth.com' },
      { key: 'utm_medium', value: 'email&social' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe(
      'utm%20source=coding%20booth.com&utm_medium=email%26social',
    );
  });

  it('should handle an empty array gracefully', () => {
    const params: QueryParameter[] = [];
    const result = generateQueryParameterString(params);
    expect(result).toBe('');
  });

  it('should remove pairs with null or undefined keys or values', () => {
    const params: QueryParameter[] = [
      { key: 'utm_source', value: null },
      { key: 'utm_medium', value: undefined },
      { key: null, value: 'value' },
      { key: undefined, value: 'value' },
      { key: 'utm_campaign', value: 'valid' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe('utm_campaign=valid');
  });

  it('should handle keys and values with numbers', () => {
    const params: QueryParameter[] = [
      { key: 'version', value: '1.0' },
      { key: 'count', value: '100' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe('version=1.0&count=100');
  });

  it('should remove pairs where key or value is not given', () => {
    const params: QueryParameter[] = [
      { key: 'utm_source', value: 'coding-booth.com' },
      { value: 'link' }, // key is missing
      { key: 'utm_campaign' }, // value is missing
      { key: null, value: 'value' },
      { key: undefined, value: 'value' },
      { key: 'utm_term', value: null },
      { key: 'utm_content', value: undefined },
      { key: 'utm_medium', value: 'valid' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe('utm_source=coding-booth.com&utm_medium=valid');
  });

  it('should handle pairs with key and value being optional', () => {
    const params: QueryParameter[] = [
      { key: 'utm_source', value: 'coding-booth.com' },
      { key: 'utm_medium', value: 'link' },
      { key: undefined, value: undefined }, // both key and value are missing
      { key: null, value: null }, // both key and value are null
      { key: 'utm_campaign', value: 'crafted-with-heart' },
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe(
      'utm_source=coding-booth.com&utm_medium=link&utm_campaign=crafted-with-heart',
    );
  });

  it('should handle cases where key is an empty string and/or value is an empty string', () => {
    const params: QueryParameter[] = [
      { key: '', value: 'value' }, // empty key
      { key: 'utm_medium', value: '' }, // empty value
      { key: '', value: '' }, // both key and value are empty
      { key: 'utm_source', value: 'coding-booth.com' }, // valid pair
    ];
    const result = generateQueryParameterString(params);
    expect(result).toBe('utm_source=coding-booth.com');
  });
});

describe('isValidQueryParameter', () => {
  it('should return true for a valid key-value pair', () => {
    const param: QueryParameter = {
      key: 'utm_source',
      value: 'coding-booth.com',
    };
    expect(isValidQueryParameter(param)).toBe(true);
  });

  it('should return false for a pair with a null key', () => {
    const param: QueryParameter = { key: null, value: 'coding-booth.com' };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with an undefined key', () => {
    const param: QueryParameter = { key: undefined, value: 'coding-booth.com' };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with an empty key', () => {
    const param: QueryParameter = { key: '', value: 'coding-booth.com' };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with a null value', () => {
    const param: QueryParameter = { key: 'utm_source', value: null };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with an undefined value', () => {
    const param: QueryParameter = { key: 'utm_source', value: undefined };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with an empty value', () => {
    const param: QueryParameter = { key: 'utm_source', value: '' };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with both key and value as null', () => {
    const param: QueryParameter = { key: null, value: null };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with both key and value as undefined', () => {
    const param: QueryParameter = { key: undefined, value: undefined };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return false for a pair with both key and value as empty strings', () => {
    const param: QueryParameter = { key: '', value: '' };
    expect(isValidQueryParameter(param)).toBe(false);
  });

  it('should return true for a valid key and value with special characters', () => {
    const param: QueryParameter = {
      key: 'utm source',
      value: 'coding booth.com',
    };
    expect(isValidQueryParameter(param)).toBe(true);
  });

  it('should return true for a valid key and value with numbers', () => {
    const param: QueryParameter = {
      key: 'version',
      value: '1.0',
    };
    expect(isValidQueryParameter(param)).toBe(true);
  });
});
