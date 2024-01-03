import {
  Location,
  formatLocationToString,
  structureLocation,
} from '@tuffz/utils-locations';

interface ProfileInformationProps {
  first_name: string;
  last_name: string;
  latest_job_company?: string | null;
  latest_job_position: string;
  location_city: string;
  location_state?: string | null;
  location_country: string;
}

export function ProfileInformation(props: ProfileInformationProps) {
  const location: Location = {
    city: props.location_city,
    state: props.location_state,
    country: props.location_country,
  };

  const structuredLocation = structureLocation(location);
  const formattedLocation = formatLocationToString(structuredLocation);

  return (
    <>
      <h1 className="profile-information text-2xl py-2">
        {props.first_name} {props.last_name}
      </h1>
      <p className="profile-information-job text-gray-700 py-2">
        {props.latest_job_position}
        {props.latest_job_company ? ' at ' + props.latest_job_company : ''}
      </p>
      <p className="text-sm text-gray-500 py-2">{formattedLocation}</p>
    </>
  );
}
