import * as React from "react";
import { SVGProps } from "react";

export const checkSVG = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5303 0.71967C12.8232 1.01256 12.8232 1.48744 12.5303 1.78033L5.03033 9.28033C4.73744 9.57322 4.26256 9.57322 3.96967 9.28033L0.21967 5.53033C-0.0732233 5.23744 -0.0732233 4.76256 0.21967 4.46967C0.512563 4.17678 0.987437 4.17678 1.28033 4.46967L4.5 7.68934L11.4697 0.71967C11.7626 0.426777 12.2374 0.426777 12.5303 0.71967Z"
        fill="#181818"
      />
    </svg>
  );
};
export default checkSVG;
// fill="#747474"
