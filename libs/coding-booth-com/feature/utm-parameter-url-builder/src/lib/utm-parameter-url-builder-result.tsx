'use client';

export function UtmParameterUrlBuilderResult() {
  return (
    <div id="utm-parameter-url-builder-result">
      <textarea
        className="relative inline-flex w-full items-stretch justify-between gap-x-2 break-all rounded-md border border-gray-300 bg-gray-50 px-4 py-3 text-left font-mono text-sm text-gray-900 shadow-sm outline-0 outline-lime-500 [--is-toggle-tooltip:false] hover:bg-gray-50 focus:border-lime-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700  dark:text-white dark:hover:bg-neutral-800"
        placeholder="Fill out required fields above and a URL will be generated for you here."
      ></textarea>
    </div>
  );
}

export default UtmParameterUrlBuilderResult;
