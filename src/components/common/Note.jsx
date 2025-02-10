export default function Note({ text, addClass }) {
  return (
    <div
      className={`${addClass} border border-dashed border-gray-400 p-4 bg-gray-50 italic shadow-md text-gray-700`}
    >
      <strong className="font-semibold">Note:</strong>
      <p className="whitespace-pre-line">{text}</p>
    </div>
  );
}
