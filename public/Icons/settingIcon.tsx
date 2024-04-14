import * as React from "react";
import { SVGProps } from "react";

function SettingSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        d="M11.8751 20H8.12509C7.87509 20 7.65843 19.9167 7.47509 19.75C7.29176 19.5833 7.18343 19.375 7.15009 19.125L6.85009 16.8C6.63343 16.7167 6.42926 16.6167 6.23759 16.5C6.04593 16.3833 5.85843 16.2583 5.67509 16.125L3.50009 17.025C3.26676 17.1083 3.03343 17.1167 2.80009 17.05C2.56676 16.9833 2.38343 16.8417 2.25009 16.625L0.400093 13.4C0.26676 13.1833 0.225093 12.95 0.275093 12.7C0.325093 12.45 0.450093 12.25 0.650093 12.1L2.52509 10.675C2.50843 10.5583 2.50009 10.4458 2.50009 10.3375V9.6625C2.50009 9.55417 2.50843 9.44167 2.52509 9.325L0.650093 7.9C0.450093 7.75 0.325093 7.55 0.275093 7.3C0.225093 7.05 0.26676 6.81667 0.400093 6.6L2.25009 3.375C2.36676 3.14167 2.54593 2.99583 2.78759 2.9375C3.02926 2.87917 3.26676 2.89167 3.50009 2.975L5.67509 3.875C5.85843 3.74167 6.05009 3.61667 6.25009 3.5C6.45009 3.38333 6.65009 3.28333 6.85009 3.2L7.15009 0.875C7.18343 0.625 7.29176 0.416667 7.47509 0.25C7.65843 0.0833333 7.87509 0 8.12509 0H11.8751C12.1251 0 12.3418 0.0833333 12.5251 0.25C12.7084 0.416667 12.8168 0.625 12.8501 0.875L13.1501 3.2C13.3668 3.28333 13.5709 3.38333 13.7626 3.5C13.9543 3.61667 14.1418 3.74167 14.3251 3.875L16.5001 2.975C16.7334 2.89167 16.9668 2.88333 17.2001 2.95C17.4334 3.01667 17.6168 3.15833 17.7501 3.375L19.6001 6.6C19.7334 6.81667 19.7751 7.05 19.7251 7.3C19.6751 7.55 19.5501 7.75 19.3501 7.9L17.4751 9.325C17.4918 9.44167 17.5001 9.55417 17.5001 9.6625V10.3375C17.5001 10.4458 17.4834 10.5583 17.4501 10.675L19.3251 12.1C19.5251 12.25 19.6501 12.45 19.7001 12.7C19.7501 12.95 19.7084 13.1833 19.5751 13.4L17.7251 16.6C17.5918 16.8167 17.4043 16.9625 17.1626 17.0375C16.9209 17.1125 16.6834 17.1083 16.4501 17.025L14.3251 16.125C14.1418 16.2583 13.9501 16.3833 13.7501 16.5C13.5501 16.6167 13.3501 16.7167 13.1501 16.8L12.8501 19.125C12.8168 19.375 12.7084 19.5833 12.5251 19.75C12.3418 19.9167 12.1251 20 11.8751 20ZM10.0501 13.5C11.0168 13.5 11.8418 13.1583 12.5251 12.475C13.2084 11.7917 13.5501 10.9667 13.5501 10C13.5501 9.03333 13.2084 8.20833 12.5251 7.525C11.8418 6.84167 11.0168 6.5 10.0501 6.5C9.06676 6.5 8.23759 6.84167 7.56259 7.525C6.88759 8.20833 6.55009 9.03333 6.55009 10C6.55009 10.9667 6.88759 11.7917 7.56259 12.475C8.23759 13.1583 9.06676 13.5 10.0501 13.5ZM10.0501 11.5C9.63343 11.5 9.27926 11.3542 8.98759 11.0625C8.69593 10.7708 8.55009 10.4167 8.55009 10C8.55009 9.58333 8.69593 9.22917 8.98759 8.9375C9.27926 8.64583 9.63343 8.5 10.0501 8.5C10.4668 8.5 10.8209 8.64583 11.1126 8.9375C11.4043 9.22917 11.5501 9.58333 11.5501 10C11.5501 10.4167 11.4043 10.7708 11.1126 11.0625C10.8209 11.3542 10.4668 11.5 10.0501 11.5ZM9.00009 18H10.9751L11.3251 15.35C11.8418 15.2167 12.3209 15.0208 12.7626 14.7625C13.2043 14.5042 13.6084 14.1917 13.9751 13.825L16.4501 14.85L17.4251 13.15L15.2751 11.525C15.3584 11.2917 15.4168 11.0458 15.4501 10.7875C15.4834 10.5292 15.5001 10.2667 15.5001 10C15.5001 9.73333 15.4834 9.47083 15.4501 9.2125C15.4168 8.95417 15.3584 8.70833 15.2751 8.475L17.4251 6.85L16.4501 5.15L13.9751 6.2C13.6084 5.81667 13.2043 5.49583 12.7626 5.2375C12.3209 4.97917 11.8418 4.78333 11.3251 4.65L11.0001 2H9.02509L8.67509 4.65C8.15843 4.78333 7.67926 4.97917 7.23759 5.2375C6.79593 5.49583 6.39176 5.80833 6.02509 6.175L3.55009 5.15L2.57509 6.85L4.72509 8.45C4.64176 8.7 4.58343 8.95 4.55009 9.2C4.51676 9.45 4.50009 9.71667 4.50009 10C4.50009 10.2667 4.51676 10.525 4.55009 10.775C4.58343 11.025 4.64176 11.275 4.72509 11.525L2.57509 13.15L3.55009 14.85L6.02509 13.8C6.39176 14.1833 6.79593 14.5042 7.23759 14.7625C7.67926 15.0208 8.15843 15.2167 8.67509 15.35L9.00009 18Z"
        fill="black"
      />
    </svg>
  );
}
export default SettingSVG;
