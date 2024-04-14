import * as React from "react";
import { SVGProps } from "react";

function ShareSVG(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1716 1.17157C13.9217 0.421427 14.9391 0 16 0C17.0609 0 18.0783 0.421427 18.8284 1.17157C19.5786 1.92172 20 2.93913 20 4C20 5.06087 19.5786 6.07828 18.8284 6.82843C18.0783 7.57857 17.0609 8 16 8C14.9391 8 13.9217 7.57857 13.1716 6.82843C13.0979 6.75477 13.0274 6.67853 12.9602 6.59993L7.91861 9.19711C7.97235 9.45938 8 9.72827 8 10C8 10.2717 7.97235 10.5406 7.91861 10.8029L12.9602 13.4001C13.0274 13.3215 13.0979 13.2452 13.1716 13.1716C13.9217 12.4214 14.9391 12 16 12C17.0609 12 18.0783 12.4214 18.8284 13.1716C19.5786 13.9217 20 14.9391 20 16C20 17.0609 19.5786 18.0783 18.8284 18.8284C18.0783 19.5786 17.0609 20 16 20C14.9391 20 13.9217 19.5786 13.1716 18.8284C12.4214 18.0783 12 17.0609 12 16C12 15.7283 12.0276 15.4594 12.0814 15.1971L7.03981 12.5999C6.97258 12.6785 6.90209 12.7548 6.82843 12.8284C6.07828 13.5786 5.06087 14 4 14C2.93913 14 1.92172 13.5786 1.17157 12.8284C0.421427 12.0783 0 11.0609 0 10C0 8.93913 0.421427 7.92172 1.17157 7.17157C1.92172 6.42143 2.93913 6 4 6C5.06087 6 6.07828 6.42143 6.82843 7.17157C6.90208 7.24523 6.97257 7.32146 7.03979 7.40005L12.0814 4.80287C12.0276 4.5406 12 4.27173 12 4C12 2.93913 12.4214 1.92172 13.1716 1.17157ZM14.2283 4.92788C14.2166 4.89895 14.2035 4.87031 14.189 4.84203C14.1828 4.83014 14.1765 4.81843 14.17 4.80689C14.0589 4.55504 14 4.28056 14 4C14 3.46957 14.2107 2.96086 14.5858 2.58579C14.9609 2.21071 15.4696 2 16 2C16.5304 2 17.0391 2.21071 17.4142 2.58579C17.7893 2.96086 18 3.46957 18 4C18 4.53043 17.7893 5.03914 17.4142 5.41421C17.0391 5.78929 16.5304 6 16 6C15.4696 6 14.9609 5.78929 14.5858 5.41421C14.4414 5.26979 14.3213 5.10555 14.2283 4.92788ZM5.77178 9.07221C5.67874 8.89451 5.55867 8.73024 5.41421 8.58579C5.03914 8.21071 4.53043 8 4 8C3.46957 8 2.96086 8.21071 2.58579 8.58579C2.21071 8.96086 2 9.46957 2 10C2 10.5304 2.21071 11.0391 2.58579 11.4142C2.96086 11.7893 3.46957 12 4 12C4.53043 12 5.03914 11.7893 5.41421 11.4142C5.55864 11.2698 5.6787 11.1055 5.77174 10.9279C5.78338 10.8989 5.79646 10.8703 5.81103 10.842C5.81715 10.8301 5.82348 10.8184 5.83 10.8069C5.94105 10.5551 6 10.2806 6 10C6 9.71938 5.94103 9.44485 5.82994 9.19296C5.82344 9.18146 5.81713 9.16979 5.81103 9.15794C5.79648 9.12971 5.78341 9.1011 5.77178 9.07221ZM14.17 15.193C14.059 15.4449 14 15.7194 14 16C14 16.5304 14.2107 17.0391 14.5858 17.4142C14.9609 17.7893 15.4696 18 16 18C16.5304 18 17.0391 17.7893 17.4142 17.4142C17.7893 17.0391 18 16.5304 18 16C18 15.4696 17.7893 14.9609 17.4142 14.5858C17.0391 14.2107 16.5304 14 16 14C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.4413 14.7302 14.3213 14.8945 14.2282 15.0722C14.2166 15.1011 14.2035 15.1297 14.189 15.1579C14.1829 15.1698 14.1766 15.1815 14.17 15.193Z"
      />
    </svg>
  );
}
export default ShareSVG;
// fill="#747474"