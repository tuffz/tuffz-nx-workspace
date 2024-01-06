import {
  Location,
  formatLocationToString,
  structureLocation,
} from '@tuffz/utils-locations';

import { CompanyLocation } from './enum/company-location';

export interface CareerTimelineItemProps {
  position: string;
  company: string;
  date_start: Date;
  date_end: Date;
  location: keyof typeof CompanyLocation; // Use keyof to specify location as a valid key
}

export function CareerTimelineItem(props: CareerTimelineItemProps) {
  const location: Location = {
    city: CompanyLocation[props.location].city,
    state: CompanyLocation[props.location].state,
    country: CompanyLocation[props.location].country,
  };

  const structuredLocation = structureLocation(location);
  const formattedLocation = formatLocationToString(structuredLocation);
  
  const formattedStartDate = props.date_start.toLocaleDateString();
  const formattedEndDate = props.date_end.toLocaleDateString();

  return (
    <div className="career-timeline-item my-3">
      <div className="career-company-position-item flex flex-col flex-grow">
        <div className="flex flex-col sm:flex-auto sm:flex-row sm:flex-wrap">
          <h3 className="font-semibold">{props.position}</h3>
          <span className="hidden sm:block px-1"> at </span>
          <h4 className="font-medium">{props.company}</h4>
        </div>
        <span className="block text-sm text-gray-500 py-0.5">
          {formattedStartDate} - {formattedEndDate}
        </span>
        <span className="block text-sm text-gray-400 py-0.5">
          {formattedLocation}
        </span>
      </div>
    </div>
  );
}

export default CareerTimelineItem;