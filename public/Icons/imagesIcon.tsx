import * as React from "react";
import { SVGProps } from "react";

function ImagesSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.58579 0.585787C5.96086 0.210714 6.46957 0 7 0H13C13.5304 0 14.0391 0.210714 14.4142 0.585787C14.7893 0.960859 15 1.46957 15 2C15 2.26522 15.1054 2.51957 15.2929 2.70711C15.4804 2.89464 15.7348 3 16 3H17C17.7957 3 18.5587 3.31607 19.1213 3.87868C19.6839 4.44129 20 5.20435 20 6V15C20 15.7957 19.6839 16.5587 19.1213 17.1213C18.5587 17.6839 17.7957 18 17 18H3C2.20435 18 1.44129 17.6839 0.87868 17.1213C0.31607 16.5587 0 15.7956 0 15V6C0 5.20435 0.31607 4.44129 0.87868 3.87868C1.44129 3.31607 2.20435 3 3 3H4C4.26522 3 4.51957 2.89464 4.70711 2.70711C4.89464 2.51957 5 2.26522 5 2C5 1.46957 5.21071 0.960859 5.58579 0.585787ZM13 2L7 2C7 2.79565 6.68393 3.55871 6.12132 4.12132C5.55871 4.68393 4.79565 5 4 5H3C2.73478 5 2.48043 5.10536 2.29289 5.29289C2.10536 5.48043 2 5.73478 2 6V15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H17C17.2652 16 17.5196 15.8946 17.7071 15.7071C17.8946 15.5196 18 15.2652 18 15V6C18 5.73478 17.8946 5.48043 17.7071 5.29289C17.5196 5.10536 17.2652 5 17 5H16C15.2044 5 14.4413 4.68393 13.8787 4.12132C13.3161 3.55871 13 2.79565 13 2ZM7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93913 14 7.92172 13.5786 7.17157 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157ZM10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8Z"
      />
    </svg>
  );
}
export default ImagesSVG;
// fill="#747474"
