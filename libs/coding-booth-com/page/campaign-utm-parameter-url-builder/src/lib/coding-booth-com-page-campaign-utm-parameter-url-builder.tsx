import { UtmParameterUrlBuilder } from '@tuffz/coding-booth-com-feature-utm-parameter-url-builder';

export function CodingBoothComPageCampaignUtmParameterUrlBuilder() {
  return (
    <section className="lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20">
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:items-start lg:gap-14 lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight md:-mb-4 lg:text-6xl dark:text-white">
              Guaranteed{' '}
              <strong className="underline decoration-lime-500 decoration-8">
                error-free
              </strong>{' '}
              UTM tracking for precise insights with ease!
            </h1>
            <p className="text-left text-lg leading-relaxed opacity-80 md:text-center lg:text-left dark:text-white">
              Say goodbye to tracking errors and hello to{' '}
              <strong className="underline decoration-lime-500 decoration-4">
                precise insights
              </strong>{' '}
              effortlessly! <br className="hidden sm:block lg:hidden" />{' '}
              <br className="hidden xl:block" />
              Our{' '}
              <strong className="text-xl font-bold tracking-tight md:-mb-4">
                Campaign UTM Parameter URL Builder
              </strong>
              ,{' '}
              <strong className="underline decoration-lime-500 decoration-4">
                simplifies
              </strong>{' '}
              your URL creation process. No more worrying about typos or missing
              parameters. <br className="hidden sm:block lg:hidden" />{' '}
              <br className="hidden xl:block" />
              Easily generate{' '}
              <strong className="underline decoration-lime-500 decoration-4">
                all necessary and optional
              </strong>{' '}
              parameters{' '}
              <strong className="underline decoration-lime-500 decoration-4">
                with confidence
              </strong>
              .
            </p>
          </div>

          <div className="lg:w-full lg:min-w-96">
            <UtmParameterUrlBuilder />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 p-8">
        <div className="container mx-auto">
          <div className="py-8">
            <div className="pb-4">
              <h2 className="text-2xl font-extrabold tracking-tight lg:text-2xl dark:text-white">
                Share the generated campaign URL
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingBoothComPageCampaignUtmParameterUrlBuilder;
