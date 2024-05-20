import {
  UtmParameterUrlBuilder,
  UtmParameterUrlBuilderResult,
} from '@tuffz/coding-booth-com-feature-utm-parameter-url-builder';

import { Introduction } from './introduction';

export function CodingBoothComPageCampaignUtmParameterUrlBuilder() {
  return (
    <section className="lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20">
          <Introduction />

          <div className="lg:w-full lg:min-w-96">
            <UtmParameterUrlBuilder />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-800 p-8">
        <div className="container mx-auto">
          <div className="p-8">
            <h2 className="pb-4 text-2xl font-extrabold tracking-tight lg:text-2xl dark:text-white">
              Share the generated campaign URL
            </h2>
            <UtmParameterUrlBuilderResult />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CodingBoothComPageCampaignUtmParameterUrlBuilder;
