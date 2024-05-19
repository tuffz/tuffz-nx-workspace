'use client';

import { UtmParameterUrlBuilderInput as InputField } from './utm-parameter-url-builder-input';

export function UtmParameterUrlBuilder() {
  const inputFields = [
    {
      id: 'website-url',
      label: 'The full website URL (e.g. https://www.tuffz.com)',
      placeholder: 'website URL',
      required: true,
    },
    {
      id: 'campaign-id',
      label: 'The ads campaign id',
      placeholder: 'campaign ID',
      required: false,
    },
    {
      id: 'campaign-source',
      label: 'The referrer (e.g. google, newsletter)',
      placeholder: 'campaign source',
      required: true,
    },
    {
      id: 'campaign-medium',
      label: 'The marketing medium (e.g. cpc, banner, email)',
      placeholder: 'campaign medium',
      required: true,
    },
    {
      id: 'campaign-name',
      label: 'Product, promo code, or slogan (e.g. summer_sale)',
      placeholder: 'campaign name',
      required: true,
    },
    {
      id: 'campaign-term',
      label: 'Identify the paid keywords',
      placeholder: 'campaign term',
      required: false,
    },
    {
      id: 'campaign-content',
      label: 'Use to differentiate ads',
      placeholder: 'campaign content',
      required: false,
    },
  ];

  return (
    <>
      <h2 className="pb-4 text-2xl font-extrabold tracking-tight lg:text-2xl dark:text-white">
        Enter the website URL and campaign information
      </h2>
      <p className="pb-4 text-lg leading-relaxed opacity-80 dark:text-white">
        Fill out all fields marked with an asterisk (*), and the campaign URL
        will be generated for you.
      </p>

      {inputFields.map((field) => (
        <InputField
          key={field.id}
          id={field.id}
          label={field.label}
          placeholder={field.placeholder}
          required={field.required}
        />
      ))}
    </>
  );
}

export default UtmParameterUrlBuilder;
