import {
  LocationInterface,
  formatLocationToString,
  structureLocation,
} from '@tuffz/shared-util-location-formatting';

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
  const location: LocationInterface = {
    city: props.location_city,
    state: props.location_state,
    country: props.location_country,
  };

  const structuredLocation = structureLocation(location);
  const formattedLocation = formatLocationToString(structuredLocation);

  return (
    <>
      <h1 className="profile-information py-2 text-3xl font-bold">
        {props.first_name} {props.last_name}
      </h1>
      <p className="profile-information-job py-2 text-gray-700">
        {props.latest_job_position}
        {props.latest_job_company ? ' at ' + props.latest_job_company : ''}
      </p>
      <p className="py-2 text-sm text-gray-500">{formattedLocation}</p>
    </>
  );
}
