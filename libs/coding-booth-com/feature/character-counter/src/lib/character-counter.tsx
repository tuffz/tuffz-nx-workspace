'use client';

import { CharacterCounterTextarea } from './character-counter-textarea';
import { IntroSection } from './intro-section';

export function CharacterCounter() {
  return (
    <section className="lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20">
          <IntroSection />
          <CharacterCounterTextarea />
        </div>
      </div>
    </section>
  );
}

export default CharacterCounter;
