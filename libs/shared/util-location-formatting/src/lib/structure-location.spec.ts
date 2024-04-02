import { LocationInterface } from './location.interface';
import { structureLocation } from './structure-location';
import { StructuredLocationInterface } from './structured-location.interface';

describe('structureLocation', () => {
  it('should create a structured location with all properties', () => {
    const location: LocationInterface = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocationInterface = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should create a structured location without state', () => {
    const location: LocationInterface = {
      city: 'Paris',
      country: 'France',
    };
    const expectedStructuredLocation: StructuredLocationInterface = {
      city: 'Paris',
      state: null,
      country: 'France',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle null state by setting it to undefined in structured location', () => {
    const location: LocationInterface = {
      city: 'London',
      state: null,
      country: 'United Kingdom',
    };
    const expectedStructuredLocation: StructuredLocationInterface = {
      city: 'London',
      state: null,
      country: 'United Kingdom',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle empty state by setting it to undefined in structured location', () => {
    const location: LocationInterface = {
      city: 'Berlin',
      state: '',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocationInterface = {
      city: 'Berlin',
      state: null,
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle empty state by setting it to undefined in structured location', () => {
    const location: LocationInterface = {
      city: 'Berlin',
      state: 'Berlin',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocationInterface = {
      city: 'Berlin',
      state: null,
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });
});
