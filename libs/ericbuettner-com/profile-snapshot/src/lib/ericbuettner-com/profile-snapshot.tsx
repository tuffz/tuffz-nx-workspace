import { UiImageEmbed } from '@tuffz/shared/ui/image-embed';
import { UiSocialMediaIcons } from '@tuffz/shared/ui/social-media-icons';

export interface ProfileSnapshotProps {
  // firstname: string;
  // surname: string;
  // latest_job_position: string;
  // latest_job_company_name: string;
  // location_city: string;
  // location_state?: string;
  // location_country: string;
}

export function ProfileSnapshot(props: ProfileSnapshotProps) {
  return (
    <section className="flex flex-col sm:max-lg:flex-row md:justify-evenly items-center bg-white p-1 rounded-xl shadow-xl sm:m-4">
      <div className="shrink-0 mb-4 sm:mb-0 lg:m-4">
        <UiImageEmbed
          src="/assets/profile/eric-buettner.jpeg"
          alt="Portrait of Eric Büttner"
          className="rounded-xl sm:rounded-xl sm:w-60 shadow-xl"
        />
      </div>
      <div className="text-center sm:grow lg:grow-0">
        <h1 className="text-2xl py-2">Eric Büttner</h1>
        <p className="text-gray-700 py-2">
          Head of Software Engineering at allmyhomes GmbH
        </p>
        <p className="text-sm text-gray-500 py-2">
          Eberswalde, Brandenburg, Germany
        </p>
        <div className="p-2">
          <p className="flex flex-wrap justify-center">
            <span className="px-1 mx-1 text-sm">
              <UiSocialMediaIcons
                size="1.5rem"
                url="https://github.com/tuffz"
              />
            </span>
            <span className="px-1 mx-1 text-sm">
              <UiSocialMediaIcons
                size="1.5rem"
                url="https://gitlab.com/tuffz"
              />
            </span>
            <span className="px-1 mx-1 text-sm">
              <UiSocialMediaIcons
                size="1.5rem"
                url="https://www.linkedin.com/in/eric-buettner/"
              />
            </span>
            <span className="px-1 mx-1 text-sm">
              <UiSocialMediaIcons
                size="1.5rem"
                url="https://twitter.com/tuffzCOM"
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProfileSnapshot;
