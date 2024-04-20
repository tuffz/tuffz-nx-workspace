'use client';

import { ChangeEvent, useState } from 'react';

export function CharacterCounterTextarea() {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.target.value;
    setCharCount(inputText.length);
  };

  return (
    <div className="w-full lg:flex lg:flex-col">
      <div className="rounded-t-md border border-gray-300 bg-gray-50 py-2 text-center text-sm text-gray-900 lg:text-base dark:border-gray-600  dark:bg-gray-700 dark:text-white">
        <strong className="text-lime-500" data-testid="char-count">
          {charCount}
        </strong>{' '}
        Characters
      </div>
      <textarea
        className="block min-h-[50vh] w-full rounded-b-md border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-0 outline-lime-500 focus:border-lime-500 lg:grow lg:text-base dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
        placeholder="Type or paste your content here and watch the character counter work its magic!"
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
}

export default CharacterCounterTextarea;
