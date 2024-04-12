export function toKebabCase(str: string): string {
  return (
    str
      .match(/[A-Z]?[a-z]+|[0-9]+/g) // Split string into words or numbers
      ?.map((word) => word.toLowerCase()) // Convert each word to lowercase
      .join('-') ?? '' // Join words with hyphen
  );
}
interface CounterResultProps {
  length: number;
  title: string;
  index: number;
}

function CounterResult(props: CounterResultProps) {
  let className =
    'grow border bg-lime-50 border-lime-600 border-b-0 sm:border sm:border-t-0 p-3 m-2 mb-0 sm:mt-0';

  if (props.index === 0) {
    className += ' ml-0'; // Append class if first item
  }
  if (props.index === props.length - 1) {
    className += ' mr-0'; // Append class if last item
  }

  return (
    <div id={toKebabCase('result-' + props.title)} className={className}>
      279 {props.title}
    </div>
  );
}

export function CharacterCounter() {
  const counts = [
    'characters',
    // 'words',
    // 'without whitespaces',
    'paragraphs',
  ];

  return (
    <div className="px-5">
      <div className="pt-5">
        <h1 className="text-4xl text-lime-700">Character counter</h1>
        <p className="pt-3 text-base text-lime-600">
          Characters, letters and word counter
        </p>
      </div>
      <div className="flex flex-col-reverse pt-5 sm:flex-col">
        <div id="textarea" className="bg-gray-100">
          <textarea
            id="message"
            className="block h-[50vh] min-h-[25vh] w-full border border-lime-500 bg-lime-50 p-2.5 text-lime-700 outline-1 focus:outline-lime-500"
            placeholder="Type or paste your content here and watch the character counter work its magic!"
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-between">
          {counts.map((title, index) => (
            <CounterResult
              key={index}
              length={counts.length}
              title={title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterCounter;
