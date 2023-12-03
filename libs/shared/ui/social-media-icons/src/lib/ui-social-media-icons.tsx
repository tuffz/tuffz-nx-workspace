// Import SVG components for each platform
import UiSocialMediaIconGitHub from './icons/github';
import UiSocialMediaIconGitLab from './icons/gitlab';
import UiSocialMediaIconLinkedIn from './icons/linkedin';
import UiSocialMediaIconTwitter from './icons/twitter';
import UiSocialMediaIconX from './icons/x';
import { UiAnchor } from '@tuffz/shared/ui/anchor';

export interface UiSocialMediaIconsProps {
  size: string;
  url: string;
}

export interface UiSocialMediaIconProps {
  size: string;
}

interface PlatformMapping {
  component: (props: UiSocialMediaIconProps) => JSX.Element;
  domain: string[];
}

const platformMappings: Record<string, PlatformMapping> = {
  GitHub: {
    component: UiSocialMediaIconGitHub,
    domain: ['github.com', 'www.github.com'],
  },
  GitLab: {
    component: UiSocialMediaIconGitLab,
    domain: ['gitlab.com', 'www.gitlab.com'],
  },
  LinkedIn: {
    component: UiSocialMediaIconLinkedIn,
    domain: ['linkedin.com', 'www.linkedin.com'],
  },
  Twitter: {
    component: UiSocialMediaIconTwitter,
    domain: ['twitter.com', 'www.twitter.com'],
  },
  X: {
    component: UiSocialMediaIconX,
    domain: ['x.com', 'www.x.com'],
  },
  // Add more platforms as needed
};

const extractPlatformFromUrl = (url: string): string => {
  const urlParts = url.split('/');
  const domain = urlParts[2];

  const platform = Object.entries(platformMappings).find(
    ([key, { domain: keywords }]) =>
      keywords.some((keyword) =>
        new RegExp(`\\b${keyword}\\b`, 'i').test(domain),
      ),
  );

  return platform ? platform[0] : 'unknown';
};

export function UiSocialMediaIcons(props: UiSocialMediaIconsProps) {
  const platform = extractPlatformFromUrl(props.url);

  if (platform in platformMappings) {
    const { component: UiSocialMediaIcon } = platformMappings[
      platform
    ] as PlatformMapping;

    return (
      <UiAnchor
        href={props.url}
        title={platform}
        target="_blank"
        rel="nofollow"
        content={<UiSocialMediaIcon size={props.size} />}
      />
    );
  } else {
    // Handle case "platform is not part" of platformMapping
    return null;
  }
}

export default UiSocialMediaIcons;
