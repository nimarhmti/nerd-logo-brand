import * as React from "react";
import { SVGProps } from "react";

export const ArchiveSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="12" height="14" viewBox="0 0 12 14" {...props}>
      <path d="M6 12L2.85 13.35C2.35 13.5625 1.875 13.5219 1.425 13.2281C0.975 12.9344 0.75 12.5188 0.75 11.9813V2.25C0.75 1.8375 0.896875 1.48438 1.19063 1.19063C1.48438 0.896875 1.8375 0.75 2.25 0.75H9.75C10.1625 0.75 10.5156 0.896875 10.8094 1.19063C11.1031 1.48438 11.25 1.8375 11.25 2.25V11.9813C11.25 12.5188 11.025 12.9344 10.575 13.2281C10.125 13.5219 9.65 13.5625 9.15 13.35L6 12ZM6 10.35L9.75 11.9625V2.25H2.25V11.9625L6 10.35Z" />
    </svg>
  );
};

// fill="#747474"
// fill="#9373EE"
// fill = "#D7D7D7";
// fill="#D7D7D7"
