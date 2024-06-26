import { SharedUiSocialMediaIcons } from '@tuffz/shared-ui-social-media-icons';

export interface SocialMediaLink {
  url: string;
}

export interface SocialMediaLinksProps {
  socialMediaLinks: SocialMediaLink[];
}

export function SocialMediaLinks({ socialMediaLinks }: SocialMediaLinksProps) {
  return (
    <div className="social-media-links p-2">
      <p className="flex flex-wrap justify-center">
        {socialMediaLinks.map((link, index) => (
          <span key={index} className="mx-1 px-1 text-sm">
            <SharedUiSocialMediaIcons size={24} url={link.url} />
          </span>
        ))}
      </p>
    </div>
  );
}

export default SocialMediaLinks;
