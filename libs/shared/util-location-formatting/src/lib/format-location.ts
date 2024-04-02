import { StructuredLocationInterface } from './structured-location.interface';

export function formatLocationToString(
  structuredLocation: StructuredLocationInterface,
) {
  // Define the order in which properties should appear
  const locationSequence: (keyof StructuredLocationInterface)[] = [
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
