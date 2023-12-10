import { StructuredLocation } from './structure-location';

export function formatLocationToString(structuredLocation: StructuredLocation) {
  // Define the order in which properties should appear
  const locationSequence: (keyof StructuredLocation)[] = [
    'city',
    'state',
    'country',
  ];

  let result = '';

  // Iterate through the properties in the defined order
  locationSequence.forEach((property) => {
    const propertyValue = structuredLocation[property];

    if (
      propertyValue !== undefined &&
      propertyValue !== null &&
      propertyValue !== ''
    ) {
      if (result !== '') {
        result += ', ';
      }

      result += propertyValue;
    }
  });

  return result;
}
