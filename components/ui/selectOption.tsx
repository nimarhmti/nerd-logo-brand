"use client";
import { CheckSVG, SearchSVG } from "@/public/Icons";
import { OpenSVG } from "@/public/Icons/openIcon";
import React, { useState, useEffect, useRef, FormEvent } from "react";

//types-------------------------------->
interface optionModel {
  value: string;
  label: string;
  id: string;
}

interface Props {
  isSearchable?: boolean;
  onChange: (option: optionModel) => void;
  options: optionModel[];
  align?: "top" | "down";
  name: string;
  label: string;
}

type InputType = HTMLInputElement;

//main function
export default function SelectOption({
  align,
  isSearchable,
  onChange,
  options,
  name,
  label,
}: Props) {
  // State variables using React hooks
  const [showMenu, setShowMenu] = useState<boolean>(false); // Controls the visibility of the dropdown menu
  const [selectedItem, setSelectedItem] = useState<string>(
    options[0].id,
  );
  const [searchValue, setSearchValue] = useState(""); // Stores the value entered in the search input
  const searchRef = useRef<InputType>(null); // Reference to the search input element
  const inputRef = useRef<InputType>(null); // Reference to the custom select input element

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);
  //handler function--------------------->

  const onClickOption = (option: optionModel) => {
    setSelectedItem(option.id);
    onChange(option);
  };

  const handleClick = () => {
    setShowMenu((pre) => !pre);
  };

  const getOptions = () => {
    if (!searchValue) {
      return options;
    }

    return options?.filter(
      (option) =>
        option.label
          .toLowerCase()
          .indexOf(searchValue.toLowerCase()) >= 0,
    );
  };

  const onSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearchValue(value);
  };
  //condition

  const active = showMenu
    ? "bg-white border border-mainDark"
    : "bg-fieldColor border-none";
  const rotate = showMenu ? "rotate-180" : "rotate-0";

  const Highlighter = (id: string) => id === selectedItem;

  //Main UI function
  return (
    <div className="relative">
      <h3 className="text-mainDark text-">{label}</h3>
      <div
        ref={inputRef}
        onClick={handleClick}
        className={`${active} h-[44px]  rounded-xl  cursor-pointer py-[6px] px-[16px] text-labelText flex items-center justify-between`}
      >
        {name}
        <OpenSVG className={`fill-baseColor ${rotate}`} />
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
                className=" rounded-xl  outline-none w-full py-[6px] pr-[16px] pl-[33px] bg-fieldColor "
                ref={searchRef}
                onChange={onSearch}
                value={searchValue}
              />
              <div className="left-2 top-2 absolute">
                <SearchSVG className="fill-baseColor absolute " />
              </div>
            </div>
          )}
          {getOptions()?.map((item: optionModel) => (
            <li
              id={item.id}
              onClick={() => onClickOption(item)}
              key={item.id}
              value={item.value}
              className={`w-full h-[36px] text-baseColor ${Highlighter(item.id) ? "bg-hoverHighLight" : "bg-white"} hover:bg-fieldColor rounded-xl text-field items-center justify-between flex py-[6px] px-[24px] `}
            >
              {item.label}
              {Highlighter(item.id) && (
                <CheckSVG className="file:bg-mainDark" />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
