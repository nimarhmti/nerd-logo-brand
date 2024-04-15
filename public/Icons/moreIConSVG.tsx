import * as React from "react";
import { SVGProps } from "react";

export const MoreSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="18px"
      width="21px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 60"
      {...props}
    >
      <g>
        <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z" />
        <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z" />
        <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" />
      </g>
    </svg>
  );
};

// fill="#747474"
// fill="#9373EE"
// fill = "#D7D7D7";
// fill="#D7D7D7"
