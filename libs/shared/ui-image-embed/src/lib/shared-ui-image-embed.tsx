export interface SharedUiImageEmbedProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}

export function SharedUiImageEmbed(props: SharedUiImageEmbedProps) {
  const title = props.title || props.alt;

  return (
    <img
      src={props.src}
      alt={props.alt}
      {...(title && { title })}
      className={props.className}
    />
  );
}

export default SharedUiImageEmbed;
