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
    state:
      state !== null && state !== undefined && state !== '' && state !== city
        ? state
        : null,
  };

  return structuredLocation;
}
