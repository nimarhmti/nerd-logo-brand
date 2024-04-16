"use client";
import { CheckSVG, SearchSVG } from "@/public/Icons";
import { OpenSVG } from "@/public/Icons/openIcon";
import React, { useState, useEffect, useRef } from "react";

//types-------------------------------->
interface optionModel {
  value: string;
  label: string;
  id: string;
}

interface Props {
  placeHolder?: string;
  isSearchable?: boolean;
  onChange?: () => void;
  options?: optionModel[];
  isMulti?: boolean;
  align?: string;
  name?: string;
  label?: string;
}

type InputType = HTMLInputElement;

//main function
export default function SelectOption({
  align,
  isMulti,
  isSearchable,
  onChange,
  options,
  placeHolder,
  name,
  label,
}: Props) {
  // State variables using React hooks
  const [showMenu, setShowMenu] = useState<boolean>(false); // Controls the visibility of the dropdown menu
  const [selectedValue, setSelectedValue] = useState<
    optionModel[] | null | []
  >(isMulti ? [] : null); // Stores the selected value(s)
  const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
  const searchRef = useRef<InputType>(null); // Reference to the search input element
  const inputRef = useRef<InputType>(null); // Reference to the custom select input element

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);
  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  //   const handleInputClick = () => {
  //     setShowMenu(!showMenu);
  //   };

  //   const getDisplay = () => {
  //     if()
  //   };

  const handleClick = () => {
    setShowMenu((pre) => !pre);
  };

  //condition

  const active = showMenu
    ? "bg-white border border-mainDark"
    : "bg-fieldColor border-none";

  //Main UI function
  return (
    <div className="relative">
      <h3 className="text-mainDark text-">{label}</h3>
      <div
        onClick={handleClick}
        className={`${active} h-[44px]  rounded-xl  cursor-pointer py-[6px] px-[16px] text-labelText flex items-center`}
      >
        {name}
      </div>
      {showMenu && (
        <ul
          className={`flex flex-col items-center gap-[4px] ${active} rounded-xl  cursor-pointer p-[16px] absolute w-full mt-1`}
        >
          {isSearchable && (
            <div className="relative w-full">
              <input
                type="text"
                placeholder="search"
                className=" rounded-xl  outline-none w-full py-[6px] pr-[16px] pl-[33px] bg-fieldColor  "
              />
              <div className="left-2 top-2 absolute">
                <SearchSVG className="fill-baseColor absolute " />
              </div>
            </div>
          )}
          {options?.map((item: optionModel) => (
            <li
              id={item.id}
              key={item.id}
              value={item.value}
              className=" w-full h-[36px] text-baseColor hover:bg-fieldColor rounded-xl text-field items-center justify-between flex py-[6px] px-[24px]"
            >
              {item.label}
              <CheckSVG className="file:bg-mainDark" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
