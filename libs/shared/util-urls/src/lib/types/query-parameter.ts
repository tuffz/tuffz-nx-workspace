export interface QueryParameter {
  key?: string | null;
  value?: string | null;
}

export type ValidQueryParameter = { key: string; value: string };
