import { UiSocialMediaIcons } from '@tuffz/shared/ui/social-media-icons';

export interface SocialMediaLinksProps {}

export function SocialMediaLinks(props: SocialMediaLinksProps) {
  return (
    <div className="p-2">
      <p className="flex flex-wrap justify-center">
        <span className="px-1 mx-1 text-sm">
          <UiSocialMediaIcons size="1.5rem" url="https://github.com/tuffz" />
        </span>
        <span className="px-1 mx-1 text-sm">
          <UiSocialMediaIcons size="1.5rem" url="https://gitlab.com/tuffz" />
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
  );
}

export default SocialMediaLinks;
