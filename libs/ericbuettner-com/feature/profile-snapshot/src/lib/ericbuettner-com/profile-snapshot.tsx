import { ProfileImage } from './profile-image';
import { ProfileInformation } from './profile-information';
import { SocialMediaLink, SocialMediaLinks } from './social-media-links';

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
    { url: 'https://stackoverflow.com/users/2745844/eric-b%C3%BCttner' },
    { url: 'https://www.producthunt.com/@tuffzcom' },
    { url: 'https://www.linkedin.com/in/eric-buettner/' },
    { url: 'https://twitter.com/tuffzCOM' },
  ];

  return (
    <section className="profile-snapshot flex flex-col items-center rounded-xl bg-white p-1 shadow-xl sm:m-4 sm:max-lg:flex-row md:justify-evenly">
      <ProfileImage
        src="/assets/profile/eric-buettner.jpeg"
        alt={`Portrait of ${props.first_name} ${props.last_name}`}
      />
      <div className="text-center sm:grow">
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
      </div>
    </section>
  );
}

export default ProfileSnapshot;
