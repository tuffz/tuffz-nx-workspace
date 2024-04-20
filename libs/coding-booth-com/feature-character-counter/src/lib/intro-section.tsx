export function IntroSection() {
  return (
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
  );
}
