import * as React from "react";
import { SVGProps } from "react";

function ReWriterSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 3C13 1.32672 14.3267 0 16 0C17.6733 0 19 1.32672 19 3V15C19 15.2652 18.8946 15.5196 18.7071 15.7071L16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15C0 14.2044 0.31607 13.4413 0.87868 12.8787C1.44129 12.3161 2.20435 12 3 12H7C7.26522 12 7.51957 11.8946 7.70711 11.7071C7.89464 11.5196 8 11.2652 8 11C8 10.7348 7.89464 10.4804 7.70711 10.2929C7.51957 10.1054 7.26522 10 7 10H4C3.44772 10 3 9.55229 3 9C3 8.44772 3.44772 8 4 8H7C7.79565 8 8.55871 8.31607 9.12132 8.87868C9.68393 9.44129 10 10.2043 10 11C10 11.7957 9.68393 12.5587 9.12132 13.1213C8.55871 13.6839 7.79565 14 7 14H3C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H13.5858L13.2929 15.7071C13.1054 15.5196 13 15.2652 13 15V3ZM15 6V14.5858L16 15.5858L17 14.5858V6H15ZM17 4H15V3C15 2.43128 15.4313 2 16 2C16.5687 2 17 2.43128 17 3V4Z"
      />
    </svg>
  );
}
export default ReWriterSVG;
// fill="#747474"
// fill="#9373EE"
