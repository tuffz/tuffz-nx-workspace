import { QueryParameter } from './types/query-parameter';

export function generateQueryParameterString(params: QueryParameter[]): string {
  return params
    .filter(
      (param): param is { key: string; value: string } =>
        param.key != null && param.value != null,
    )
    .map(
      (param) =>
        `${encodeURIComponent(param.key)}=${encodeURIComponent(param.value)}`,
    )
    .join('&');
}
