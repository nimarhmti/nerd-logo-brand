import { BurgerSVG, HistorySVG, ShareSVG } from "@/public/Icons";
import React from "react";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  openHandler: () => void;
}
export default function Navbar({ open, openHandler }: Props) {
  return (
    <div className="bg-mainBack h-[80px] border-b py-[6px] px-[36px] border-borderColor flex items-center justify-between">
      <BurgerSVG
        className={`${open ? "fill-selectedItem" : "fill-baseColor"}  hover:fill-selectedItem cursor-pointer`}
        onClick={openHandler}
      />
      <div className=" flex items-center gap-x-2">
        <Button>
          <HistorySVG className="fill-baseColor" />
          <span>history</span>
        </Button>
        <Button>
          <ShareSVG className="fill-baseColor" />
          <span>Share</span>
        </Button>
      </div>
    </div>
  );
}
