'use client';

import { CharacterCounterTextarea } from './character-counter-textarea';
import { IntroSection } from './intro-section';

export function CharacterCounter() {
  return (
    <section className="bg-base-100 mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-stretch lg:gap-20  lg:py-20">
      <IntroSection />

      <CharacterCounterTextarea />
    </section>
  );
}

export default CharacterCounter;
