import * as React from "react";
import { SVGProps } from "react";

function ChatSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.58579 0.585786C7.96086 0.210714 8.46957 0 9 0H18C18.5304 0 19.0391 0.210713 19.4142 0.585786C19.7893 0.960861 20 1.46957 20 2V12C20 12.4045 19.7564 12.7691 19.3827 12.9239C19.009 13.0787 18.5789 12.9931 18.2929 12.7071L15.5858 10H9C8.46957 10 7.96086 9.78929 7.58579 9.41421C7.21071 9.03914 7 8.53043 7 8V2C7 1.46957 7.21071 0.960859 7.58579 0.585786ZM18 2H9V8H16C16.2652 8 16.5196 8.10536 16.7071 8.29289L18 9.58579V2ZM0.585786 7.58579C0.960859 7.21071 1.46957 7 2 7H4C4.55228 7 5 7.44772 5 8C5 8.55228 4.55228 9 4 9H2V16.5858L3.29289 15.2929C3.48043 15.1054 3.73478 15 4 15H11V13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13V15C13 15.5304 12.7893 16.0391 12.4142 16.4142C12.0391 16.7893 11.5304 17 11 17H4.41421L1.70711 19.7071C1.42111 19.9931 0.990991 20.0787 0.617317 19.9239C0.243642 19.7691 0 19.4045 0 19V9C0 8.46957 0.210714 7.96086 0.585786 7.58579Z"
      />
    </svg>
  );
}
export default ChatSVG;
// fill="#747474"
