import { LocationInterface } from '@tuffz/shared-util-location-formatting';

export const CompanyLocation: Record<string, LocationInterface> = {
  BERLIN_GERMANY: {
    city: 'Berlin',
    state: 'Berlin',
    country: 'Germany',
  },
} as const;
