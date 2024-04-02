import { formatLocationToString } from './format-location';
import { StructuredLocationInterface } from './structured-location.interface';

describe('formatLocationToString', () => {
  it('should format location with all properties', () => {
    const location = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('Eberswalde, Brandenburg, Germany');
  });

  it('should format location without state', () => {
    const location = {
      city: 'Paris',
      country: 'France',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('Paris, France');
  });

  it('should format location without city and state', () => {
    const location = {
      country: 'Germany',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('Germany');
  });

  it('should return empty string for empty location', () => {
    const location = {} as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('');
  });

  it('should ignore null properties', () => {
    const location = {
      city: 'London',
      state: null,
      country: 'United Kingdom',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('London, United Kingdom');
  });

  it('should ignore undefined properties', () => {
    const location = {
      city: 'London',
      state: undefined,
      country: 'United Kingdom',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('London, United Kingdom');
  });

  it('should ignore empty strings in between properties', () => {
    const location = {
      city: 'Los Angeles',
      state: '',
      country: 'USA',
    } as StructuredLocationInterface;
    const formattedString = formatLocationToString(location);
    expect(formattedString).toBe('Los Angeles, USA');
  });
});
