import SocialMediaLinks, { SocialMediaLink } from './social-media-links';
import { ProfileImage } from './profile-image';
import { ProfileInformation } from './profile-information';

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
  const socialLinks: SocialMediaLink[] = [
    { url: 'https://github.com/tuffz' },
    { url: 'https://gitlab.com/tuffz' },
    { url: 'https://www.linkedin.com/in/eric-buettner/' },
    { url: 'https://twitter.com/tuffzCOM' },
  ];

  return (
    <section className="profile-snapshot flex flex-col sm:max-lg:flex-row md:justify-evenly items-center bg-white p-1 rounded-xl shadow-xl sm:m-4">
      <ProfileImage
        src="/assets/profile/eric-buettner.jpeg"
        alt={`Portrait of ${props.first_name} ${props.last_name}`}
      />
      <ProfileInformation
        first_name={props.first_name}
        last_name={props.last_name}
        latest_job_company={props.latest_job_company}
        latest_job_position={props.latest_job_position}
        location_city={props.location_city}
        location_state={props.location_state}
        location_country={props.location_country}
      />
      <SocialMediaLinks socialMediaLinks={socialLinks} />
    </section>
  );
}

export default ProfileSnapshot;
