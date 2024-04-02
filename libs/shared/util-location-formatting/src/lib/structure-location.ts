import { LocationInterface } from './location.interface';
import { StructuredLocationInterface } from './structured-location.interface';

export function structureLocation(
  location: LocationInterface,
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
