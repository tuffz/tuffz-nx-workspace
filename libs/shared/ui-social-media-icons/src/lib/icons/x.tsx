import './x.scss';

import { UiSocialMediaIconProps } from '../shared-ui-social-media-icons';

export function UiSocialMediaIconX(props: UiSocialMediaIconProps) {
  return (
    <svg
      className="social-media-icon-x inline"
      data-testid="social-media-icon"
      fill="fillColor"
      width={props.size}
      height={props.size}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>X (former Twitter)</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

export default UiSocialMediaIconX;
