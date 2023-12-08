import { UiImageEmbed } from '@tuffz/shared/ui/image-embed';
import { formatLocation, Location } from '@tuffz/utils-format-location';
import { SocialMediaLinks } from './social-media-links';

export interface ProfileSnapshotProps {
  first_name: string;
  last_name: string;
  latest_job_position: string;
  latest_job_company: string;
  location_city: string;
  location_state?: string;
  location_country: string;
}

export function ProfileSnapshot(props: ProfileSnapshotProps) {
  const location: Location = {
    city: props.location_city,
    state: props.location_state,
    country: props.location_country,
  };
  const formattedLocation = formatLocation(location);

  return (
    <section className="flex flex-col sm:max-lg:flex-row md:justify-evenly items-center bg-white p-1 rounded-xl shadow-xl sm:m-4">
      <div className="shrink-0 mb-4 sm:mb-0 lg:m-4">
        <UiImageEmbed
          src="/assets/profile/eric-buettner.jpeg"
          alt={`Portrait of ${props.first_name} ${props.last_name}`}
          className="rounded-xl sm:rounded-xl sm:w-60 shadow-xl"
        />
      </div>
      <div className="text-center sm:grow lg:grow-0">
        <h1 className="text-2xl py-2">
          {props.first_name} {props.last_name}
        </h1>
        <p className="text-gray-700 py-2">
          {props.latest_job_position} at {props.latest_job_company}
        </p>
        <p className="text-sm text-gray-500 py-2">{formattedLocation}</p>
        <SocialMediaLinks />
      </div>
    </section>
  );
}

export default ProfileSnapshot;
