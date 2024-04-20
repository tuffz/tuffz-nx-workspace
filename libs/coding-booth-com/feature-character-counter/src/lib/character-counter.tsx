'use client';

import { IntroSection } from './intro-section';

export function CharacterCounter() {
  return (
    <section className="bg-base-100 mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-stretch lg:gap-20  lg:py-20">
      <IntroSection />

      <div className="w-full lg:flex lg:flex-col">
        <div className="rounded-t-md border border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 dark:border-gray-600  dark:bg-gray-700 dark:text-white">
          <strong className="text-lime-500">0</strong> Characters
        </div>
        <textarea
          className="block min-h-[50vh] w-full rounded-b-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="Type or paste your content here and watch the character counter work its magic!"
        ></textarea>
      </div>
    </section>
  );
}

export default CharacterCounter;
