import { HistorySVG, ShareSVG } from "@/public/Icons";
import { MoreSVG } from "@/public/Icons/moreIConSVG";
import React, { MouseEvent } from "react";
interface Props {
  onClick?: (e: MouseEvent<HTMLLIElement>) => void;
  children?: React.ReactNode;
  open?: boolean;
  isActive: boolean;
  direction: string;
  items?: [];
}
export default function DropDown({ onClick, open, children }: Props) {
  return (
    <div className="relative">
      <div className=" bg-mainBack border rounded-full p-2 hover:bg-hoverHighLight">
        <MoreSVG className="fill-baseColor" />
      </div>
      <ul className="absolute bg-mainBack w-fit border border-background right-2 top-10 rounded-md ">
        <li className=" w-full bg-mainBack px-3 gap-x-2 py-2 hover:bg-hoverHighLight cursor-pointer flex items-center justify-end ">
          <ShareSVG className="fill-baseColor" />
          <span className="text-">History</span>
        </li>
        <li className=" w-full bg-mainBack px-3 gap-x-2 py-2 hover:bg-hoverHighLight cursor-pointer flex items-center justify-end ">
          <HistorySVG className="fill-baseColor" />
          <span className="text-">History</span>
        </li>
      </ul>
    </div>
  );
}
