import {
  Location,
  StructuredLocation,
  structureLocation,
} from './structure-location';

describe('structureLocation', () => {
  it('should create a structured location with all properties', () => {
    const location: Location = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocation = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should create a structured location without state', () => {
    const location: Location = {
      city: 'Paris',
      country: 'France',
    };
    const expectedStructuredLocation: StructuredLocation = {
      city: 'Paris',
      state: null,
      country: 'France',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle null state by setting it to undefined in structured location', () => {
    const location: Location = {
      city: 'London',
      state: null,
      country: 'United Kingdom',
    };
    const expectedStructuredLocation: StructuredLocation = {
      city: 'London',
      state: null,
      country: 'United Kingdom',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle empty state by setting it to undefined in structured location', () => {
    const location: Location = {
      city: 'Berlin',
      state: '',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocation = {
      city: 'Berlin',
      state: null,
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });

  it('should handle empty state by setting it to undefined in structured location', () => {
    const location: Location = {
      city: 'Berlin',
      state: 'Berlin',
      country: 'Germany',
    };
    const expectedStructuredLocation: StructuredLocation = {
      city: 'Berlin',
      state: null,
      country: 'Germany',
    };
    const result = structureLocation(location);
    expect(result).toEqual(expectedStructuredLocation);
  });
});
