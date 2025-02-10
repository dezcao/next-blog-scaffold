import { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function Note({ codeType, codeBlock, initOpen = true, tail }) {
  const [isOpen, setIsOpen] = useState(initOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, codeBlock]); // `codeBlock`이 변경될 때도 높이 갱신

  return (
    <div className="w-full mx-auto mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-2 bg-gray-800 text-white rounded-t-md flex justify-between items-center"
      >
        <span>📜 코드 보기{tail}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        ref={contentRef}
        className="transition-[max-height] duration-300 ease-in-out overflow-hidden bg-gray-900 rounded-b-md"
        style={{
          maxHeight: `${contentHeight}px`,
          padding: isOpen ? "1rem" : "0",
        }}
      >
        <pre className={`whitespace-pre-wrap ${codeType}`}>
          <code>{codeBlock}</code>
        </pre>
      </div>
    </div>
  );
}
