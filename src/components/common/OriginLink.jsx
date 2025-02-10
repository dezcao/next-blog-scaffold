export default function OriginLink({ href, prefix, text, title }) {
  return (
    <div>
      <span className="text-gray-600">{title ? title : "출처"} : </span>
      <strong className="text-gray-600">[ {prefix} ] </strong>
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {text}
      </a>
    </div>
  );
}
