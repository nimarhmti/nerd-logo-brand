"use client";
import { DetailsSVG, LOGOSVG, NotificationSVG } from "@/public/Icons";
import React, { useState } from "react";
import Link from "next/link";
import "./style.css";
import { Routes, RoutesModel } from "@/Routes/Routes";
import { getPathName } from "@/utils/getPathName";
import { MoreSVG } from "@/public/Icons/moreIConSVG";
import { getRandomValues } from "crypto";
import DropDown from "./dropDown";
import { profileOptItems } from "@/utils/profileOption";
//types------------------------------->
interface Props {
  open: boolean;
}
interface profileOptionModel {
  showProfileOption: boolean;
  activeOption: string;
}
// initial values--------------------->
const initialProfileOption: profileOptionModel = {
  activeOption: "",
  showProfileOption: false,
};

export default function Sidebar({ open }: Props) {
  //states----------------------------------------->
  const [showProfileOption, setShowProfileOption] =
    useState<profileOptionModel>(initialProfileOption);

  //condition-------------------------------------->
  const isActive = (path: string) => path === getPathName();

  //handler Function------------------------------>
  const onShowProfileOption = () => {
    setShowProfileOption((prev) => ({
      ...prev,
      showProfileOption: !prev.showProfileOption,
    }));
  };

  const onGetActiveOption = (id: string) => {
    setShowProfileOption((prev) => ({
      ...prev,
      activeOption: prev.activeOption,
    }));
  };

  //map routes item
  const RoutesMapHandler = () => (
    <ul>
      {Routes.map((item: RoutesModel) => {
        return (
          <Link
            href={item.href}
            key={item.name}
            className={`flex items-center text-baseText py-[6px] px-[24px] gap-[12px] h-[50px] ${isActive(item.label) ? "activeRouteItem" : "unActiveItem"} hover:bg-hoverHighLight`}
            replace
          >
            {item.Icon}
            <span className={`hidden laptop:block ${collapse} `}>
              {item.name}
            </span>
          </Link>
        );
      })}
    </ul>
  );
  // conditions---------------------------------->
  const collapse = open ? "" : "hidden scale-0";

  //main UI function----------------------------->
  return (
    <div
      className={`bg-mainBack h-screen  w-20 border-r border-borderColor flex flex-col transition-all ease-in-out duration-100 laptop:w-[284px]`}
    >
      <div className="w-full border-b  border-borderColor h-[80px] py-[6px] px-[16px]  flex items-center gap-[10px] ">
        <LOGOSVG className="cursor-pointer" />
        <h1
          className={`text-logText logoColor ${collapse} hidden laptop:block`}
        >
          LOGO Brand
        </h1>
      </div>
      <RoutesMapHandler />

      <div
        className={`w-full mt-auto h-[115px] py-[36px]  border-t  border-borderColor  flex items-center justify-center laptop:justify-between laptop:px-[24px]`}
      >
        <div className="laptop:hidden">
          <DropDown
            items={profileOptItems}
            direction="left-[4.2rem] -bottom-6"
            open={showProfileOption.showProfileOption}
            getActiveItem={onGetActiveOption}
            isActive={showProfileOption.activeOption}
          />
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/fab6/ca52/30bb9e19747fc584f77a28f5a202b82d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cf5tWJxMifqR0rVEYi49mjiH6L1Kex0phRCqmUfTtULk8tYC06M5NYDg6UCjjg-ttNSQpi30UhTyoaPNEwdwcPnQ8dNIjD~VTQPOZQnrrJ1~98FWftND17vGtwU4RHt00tYjAzHeY0g5q~eia234I-EbRneLVQY95YJ9mIPOgVoAhaTY~-NWURAE~eAvhzr4iNXAX7RUEd8gY06mL4Nj-v6mye9aoFAVZpNagyM7bbnXDdVs2~26ME2woAl4FxsgfEUfAVIKUudVr9zKpZr-N~Pfm4UxEaduGRp0UeCok7vCGcMShL3knUSEYvAyUujYDVBo7-dP1WC~SXb3tSC1Jw__"
          alt="profile-pic"
          className="rounded-full h-[50px] w-[50px] cursor-pointer"
          onClick={onShowProfileOption}
        />
        <div className={`${collapse} hidden laptop:block`}>
          <h2 className="text-baseText">Sara Moradi</h2>
          <p className="text-description ">Lorem</p>
        </div>
        <NotificationSVG
          className={`fill-baseColor hover:fill-selectedItem cursor-pointer ${collapse} hidden laptop:block`}
        />

        <DetailsSVG
          className={`fill-baseColor hover:fill-selectedItem cursor-pointer ${collapse} hidden laptop:block`}
        />
        {/* <MoreSVG
          className={`fill-baseColor hover:fill-selectedItem cursor-pointer block ${collapse} laptop:hidden  `}
        /> */}
      </div>
    </div>
  );
}
