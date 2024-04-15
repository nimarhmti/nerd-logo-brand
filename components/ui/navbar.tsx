"use client";
import { BurgerSVG, HistorySVG, ShareSVG } from "@/public/Icons";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MoreSVG } from "@/public/Icons/moreIConSVG";
import DropDown from "./dropDown";
import { toolsItem } from "@/utils/navToolsList";
//types------------------------------>
interface Props {
  open: boolean;
  openHandler: () => void;
}
interface toolsOptionModel {
  openTools: boolean;
  activeTool: string;
}

//initial values--------------------->
const initialToolOption: toolsOptionModel = {
  activeTool: "",
  openTools: false,
};

export default function Navbar({ open, openHandler }: Props) {
  const [openTools, setOpenTools] =
    useState<toolsOptionModel>(initialToolOption);
  //handler functions------------------->
  const openToolsHandler = () => {
    setOpenTools((prev) => ({
      ...prev,
      openTools: !prev.openTools,
    }));
  };

  const onGetActiveItem = (id: string) => {
    setOpenTools((prev) => ({
      ...prev,
      activeTool: id,
    }));
  };

  //main ui function------------------>
  return (
    <div className="bg-mainBack h-[80px] border-b py-[6px] px-[36px] border-borderColor flex items-center justify-between">
      <BurgerSVG
        className={`${open ? "fill-selectedItem" : "fill-baseColor"}  hover:fill-selectedItem cursor-pointer hidden laptop:block`}
        onClick={openHandler}
      />
      <div className=" items-center gap-x-2 flex ml-auto">
        <Button className="hidden tablet:flex">
          <HistorySVG className="fill-baseColor" />
          <span>history</span>
        </Button>
        <Button className="hidden tablet:flex">
          <ShareSVG className="fill-baseColor " />
          <span>Share</span>
        </Button>
        <div className="tablet:hidden">
          <DropDown
            direction="right-2 top-10"
            items={toolsItem}
            open={openTools.openTools}
            getActiveItem={onGetActiveItem}
            isActive={openTools.activeTool}
          >
            <div className=" bg-mainBack border rounded-full p-2 hover:bg-hoverHighLight">
              <MoreSVG
                className="fill-baseColor cursor-pointer"
                onClick={openToolsHandler}
              />
            </div>
          </DropDown>
        </div>
      </div>
    </div>
  );
}
