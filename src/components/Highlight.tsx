import React from "react";

const PATTERN = /(\+30%|30%\+|30%|USD \$20\.000|\$20K\+)/g;

/** Highlights key numbers (30%, $20K+) in gold. */
export default function Highlight({ text }: { text: string }) {
  const parts = text.split(PATTERN);
  return (
    <>
      {parts.map((part, i) =>
        PATTERN.test(part) ? (
          <span key={i} className="text-primary">
            {part}
          </span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </>
  );
}
