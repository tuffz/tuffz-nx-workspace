export interface Location {
  city: string;
  state?: string | null;
  country: string;
}

export function formatLocation(location: Location): string {
  const { city, state, country } = location;
  let result = city + ',';

  if (state !== null && state !== undefined && state !== '') {
    result += ' ' + state + ',';
  }

  result += ' ' + country;

  return result.trim();
}
