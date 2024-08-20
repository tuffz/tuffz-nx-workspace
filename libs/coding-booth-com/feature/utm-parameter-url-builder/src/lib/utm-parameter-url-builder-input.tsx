'use client';

import { UtmParameterUrlBuilderInputInterface } from './utm-parameter-url-builder-input.interface';

export function UtmParameterUrlBuilderInput({
  id,
  label,
  placeholder,
  required,
}: UtmParameterUrlBuilderInputInterface) {
  return (
    <div className="pb-4">
      <input
        className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 hover:bg-gray-50 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:hover:bg-neutral-800"
        placeholder={required ? `${placeholder} *` : placeholder}
        type="text"
        id={id}
        required={required}
      />
      <div className="px-2.5">
        <label
          htmlFor={id}
          className="pt-2 text-sm leading-relaxed opacity-80 dark:text-white"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default UtmParameterUrlBuilderInput;
