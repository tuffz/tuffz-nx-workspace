export function PageNotFound() {
  return (
    <section className="bg-base-100 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-16 p-8 lg:gap-20 lg:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl dark:text-white">
        <span className="underline decoration-lime-500 decoration-8">404</span>
      </h1>

      <p className="text-center text-lg leading-relaxed opacity-80 dark:text-white">
        Whatever you were looking for, you won't find it here.
        <br className="hidden sm:block" /> Even we can't find this page, and we
        built the site! But you can always find your way from our homepage.
      </p>
    </section>
  );
}
