import { UiImageEmbed } from '@tuffz/shared/ui/image-embed';

export function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="max-w-3xl">
        <UiImageEmbed src="assets/welcome.png" alt="Welcome at Coding Booth" />
      </h1>
      <p className="text-xl">
        Exciting updates are on the way! Stay tuned as we build something
        amazing for you.
      </p>
    </div>
  );
}

export default UnderConstruction;
