import {
  Location,
  formatLocationToString,
  structureLocation,
} from '@tuffz/shared-util-location-formatting';

import { CompanyLocation } from './enum/company-location';

export interface CareerTimelineItemProps {
  position: string;
  company: string;
  date_start: Date;
  date_end: Date;
  location: keyof typeof CompanyLocation; // Use keyof to specify location as a valid key
}

export function CareerTimelineItem(props: CareerTimelineItemProps) {
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    year: 'numeric',
  };

  const location: Location = {
    city: CompanyLocation[props.location].city,
    state: CompanyLocation[props.location].state,
    country: CompanyLocation[props.location].country,
  };

  const structuredLocation = structureLocation(location);
  const formattedLocation = formatLocationToString(structuredLocation);

  const formattedStartDate = props.date_start.toLocaleDateString(
    'en-US',
    options,
  );
  const formattedEndDate = props.date_end.toLocaleDateString('en-US', options);

  return (
    <div className="career-timeline-item my-3">
      <div className="career-company-position-item flex grow flex-col">
        <div className="flex flex-col sm:flex-auto sm:flex-row sm:flex-wrap">
          <h3 className="font-semibold">{props.position}</h3>
          <span className="hidden px-1 sm:block"> at </span>
          <h4 className="font-medium">{props.company}</h4>
        </div>
        <span className="block py-0.5 text-sm text-gray-500">
          {formattedStartDate} - {formattedEndDate}
        </span>
        <span className="block py-0.5 text-sm text-gray-400">
          {formattedLocation}
        </span>
      </div>
    </div>
  );
}

export default CareerTimelineItem;
