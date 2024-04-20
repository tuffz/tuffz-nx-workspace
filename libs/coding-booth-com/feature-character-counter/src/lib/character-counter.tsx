'use client';

export function CharacterCounter() {
  return (
    <section className="bg-base-100 mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-stretch lg:gap-20  lg:py-20">
      <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:justify-normal lg:gap-14 lg:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl dark:text-white">
          No more guesswork, count characters in a blink!
        </h1>
        <p className="text-lg leading-relaxed opacity-80 dark:text-white">
          Introducing{' '}
          <strong className="text-xl font-bold tracking-tight md:-mb-4 md:text-2xl lg:text-3xl">
            CharacterCounter
          </strong>{' '}
          - your{' '}
          <strong className="underline decoration-lime-500 decoration-4">
            simple
          </strong>{' '}
          tool for counting characters. It's{' '}
          <strong className="underline decoration-lime-500 decoration-4">
            straightforward
          </strong>
          ,{' '}
          <strong className="underline decoration-lime-500 decoration-4">
            efficient
          </strong>
          , and gets the job done{' '}
          <strong className="underline decoration-lime-500 decoration-4">
            hassle-free
          </strong>
          !
        </p>
      </div>

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
