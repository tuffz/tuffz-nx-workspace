import { formatLocation, Location } from './utils-format-location';

describe('formatLocation', () => {
  it('formats location correctly with state', () => {
    const location: Location = {
      city: 'Eberswalde',
      state: 'Brandenburg',
      country: 'Germany',
    };
    const formattedLocation = formatLocation(location);
    expect(formattedLocation).toBe('Eberswalde, Brandenburg, Germany');
  });

  it('formats location correctly without state', () => {
    const location: Location = {
      city: 'Paris',
      country: 'France',
    };
    const formattedLocation = formatLocation(location);
    expect(formattedLocation).toBe('Paris, France');
  });

  it('formats location correctly with empty state', () => {
    const location: Location = {
      city: 'London',
      state: '',
      country: 'UK',
    };
    const formattedLocation = formatLocation(location);
    expect(formattedLocation).toBe('London, UK');
  });

  it('formats location correctly with null state', () => {
    const location: Location = {
      city: 'Berlin',
      state: null,
      country: 'Germany',
    };
    const formattedLocation = formatLocation(location);
    expect(formattedLocation).toBe('Berlin, Germany');
  });

  it('formats location correctly with undefined state', () => {
    const location: Location = {
      city: 'Tokyo',
      state: undefined,
      country: 'Japan',
    };
    const formattedLocation = formatLocation(location);
    expect(formattedLocation).toBe('Tokyo, Japan');
  });
});
