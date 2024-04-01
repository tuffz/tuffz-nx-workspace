import { SharedUiImageEmbed } from '@tuffz/shared-ui-image-embed';

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage(props: ProfileImageProps) {
  return (
    <div className="profile-image mb-4 shrink-0 sm:mb-0 lg:m-4">
      <SharedUiImageEmbed
        src={props.src}
        alt={props.alt}
        className="rounded-xl shadow-xl sm:w-60"
      />
    </div>
  );
}
