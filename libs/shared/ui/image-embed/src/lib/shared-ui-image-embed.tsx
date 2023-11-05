/* eslint-disable-next-line */
export interface SharedUiImageEmbedProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export function SharedUiImageEmbed(props: SharedUiImageEmbedProps) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      title={props.title}
      className={props.className}
    />
  );
}

export default SharedUiImageEmbed;
