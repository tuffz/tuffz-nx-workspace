'use client';

export function UtmParameterUrlBuilder() {
  return (
    <>
      <h2 className="pb-4 text-2xl font-extrabold tracking-tight lg:text-2xl dark:text-white">
        Enter the website URL and campaign information
      </h2>
      <p className="pb-4 text-lg leading-relaxed opacity-80 dark:text-white">
        Fill out all fields marked with an asterisk (*), and the campaign URL
        will be generated for you.
      </p>

      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="website URL *"
          type="text"
          id="website-url"
          required
        />
        <div className="px-2.5">
          <label
            htmlFor="website-url"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            The full website URL (e.g. <strong>https://www.tuffz.com</strong>)
          </label>
        </div>
      </div>
      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign ID"
          type="text"
          id="campaign-id"
          // required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-id"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            The ads campaign id
          </label>
        </div>
      </div>
      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign source *"
          type="text"
          id="campaign-source"
          required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-source"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            The referrer (e.g. <strong>google</strong>,{' '}
            <strong>newsletter</strong>)
          </label>
        </div>
      </div>
      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign medium *"
          type="text"
          id="campaign-medium"
          required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-medium"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            The marketing medium (e.g. <strong>cpc</strong>,{' '}
            <strong>banner</strong>, <strong>email</strong>)
          </label>
        </div>
      </div>
      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign name *"
          type="text"
          id="campaign-name"
          required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-name"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            Product, promo code, or slogan (e.g. <strong>summer_sale</strong>)
          </label>
        </div>
      </div>

      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign term"
          type="text"
          id="campaign-term"
          // required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-term"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            Identify the paid keywords
          </label>
        </div>
      </div>

      <div className="pb-4">
        <input
          className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
          placeholder="campaign content"
          type="text"
          id="campaign-content"
          // required
        />
        <div className="px-2.5">
          <label
            htmlFor="campaign-content"
            className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
          >
            Use to differentiate ads
          </label>
        </div>
      </div>
    </>
  );
}

export default UtmParameterUrlBuilder;
