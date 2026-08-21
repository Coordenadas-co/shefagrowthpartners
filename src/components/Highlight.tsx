import React from "react";

const SPLIT = /(\+30%|30%\+|30%|USD \$20\.000|\$20K\+)/g;
const MATCH = /^(\+30%|30%\+|30%|USD \$20\.000|\$20K\+)$/;

/** Highlights key numbers (30%, $20K+) in gold. */
export default function Highlight({ text }: { text: string }) {
  const parts = text.split(SPLIT);
  return (
    <>
      {parts.map((part, i) =>
        MATCH.test(part) ? (
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
