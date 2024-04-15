import { BurgerSVG, HistorySVG, ShareSVG } from "@/public/Icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import React from "react";
import { Button } from "@/components/ui/button";
import { MoreSVG } from "@/public/Icons/moreIConSVG";
import DropDown from "./dropDown";

interface Props {
  open: boolean;
  openHandler: () => void;
}
export default function Navbar({ open, openHandler }: Props) {
  return (
    <div className="bg-mainBack h-[80px] border-b py-[6px] px-[36px] border-borderColor flex items-center justify-between">
      <BurgerSVG
        className={`${open ? "fill-selectedItem" : "fill-baseColor"}  hover:fill-selectedItem cursor-pointer hidden laptop:block`}
        onClick={openHandler}
      />
      {/* <div className=" items-center gap-x-2 hidden tablet:flex ml-auto">
        <Button>
          <HistorySVG className="fill-baseColor" />
          <span>history</span>
        </Button>
        <Button>
          <ShareSVG className="fill-baseColor " />
          <span>Share</span>
        </Button>
      </div> */}
      {/* <MoreSVG className="fill-baseColor tablet:hidden ml-auto" /> */}
      {/* <DropDown /> */}
    </div>
  );
}
