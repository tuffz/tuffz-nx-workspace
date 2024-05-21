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
): param is ValidQueryParameter => param.key != null && param.value != null;
