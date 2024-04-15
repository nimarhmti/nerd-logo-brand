import { HistorySVG, ShareSVG } from "@/public/Icons";
import { MoreSVG } from "@/public/Icons/moreIConSVG";
import React, { MouseEvent } from "react";
//types----------------------------------->
interface ItemsModel {
  name?: string;
  id: string;
  icon: React.ReactNode;
}
interface Props {
  getActiveItem: (id: string) => void;
  children?: React.ReactNode;
  open: boolean;
  isActive?: string;
  direction: string;
  items: ItemsModel[];
}

//mainFunction--------------------------->
export default function DropDown({
  getActiveItem,
  open,
  children,
  items,
  direction,
  isActive,
}: Props) {
  //condition handler--------------------->
  const isActiveItem = (id: string) => id === isActive;

  //main u iFunction---------------------->
  return (
    <div className="relative">
      {children}
      <ul
        className={`absolute bg-mainBack w-fit border border-borderColor ${direction} rounded-md ${open ? "block" : "hidden"}`}
      >
        {items?.map((item: ItemsModel) => (
          <li
            onClick={() => getActiveItem(item.id)}
            id={item.id}
            key={item.id}
            className={` w-full px-3 gap-x-2 py-2 hover:bg-hoverHighLight cursor-pointer flex items-center justify-end ${isActiveItem(item.id) ? "bg-hoverHighLight text-selectedItem" : "bg-mainBack "}`}
          >
            {item.icon}
            {item.name && <span className="text-">{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
