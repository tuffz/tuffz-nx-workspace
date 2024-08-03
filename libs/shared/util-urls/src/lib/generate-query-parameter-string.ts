import { QueryParameter, ValidQueryParameter } from './types/query-parameter';

export const generateQueryParameterString = (
  params: QueryParameter[],
): string => {
  return params
    .filter(isValidQueryParameter)
    .map(
      (param) =>
        `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`,
    )
    .join('&');
};

export const isValidQueryParameter = (
  param: QueryParameter,
): param is ValidQueryParameter => {
  return isNonEmptyString(param.key) && isNonEmptyString(param.value);
};

const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === 'string' && value.trim().length > 0;
};
