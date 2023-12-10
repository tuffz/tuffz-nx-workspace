export interface Location {
  city: string;
  state?: string | null;
  country: string;
}

export interface StructuredLocation {
  city: string;
  state?: string | null;
  country: string;
}

export function structureLocation(location: Location): StructuredLocation {
  const { city, state, country } = location;

  const structuredLocation: StructuredLocation = {
    city: city,
    country: country,
  };

  if (state !== null && state !== undefined && state !== '') {
    structuredLocation.state = state;
  }

  return structuredLocation;
}
