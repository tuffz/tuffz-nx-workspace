export interface Location {
  city: string;
  state?: string | null;
  country: string;
}

import { StructuredLocationInterface } from './structured-location.interface';

export function structureLocation(
  location: Location,
): StructuredLocationInterface {
  const { city, state, country } = location;

  const structuredLocation: StructuredLocationInterface = {
    city: city,
    country: country,
    state:
      state !== null && state !== undefined && state !== '' && state !== city
        ? state
        : null,
  };

  return structuredLocation;
}
