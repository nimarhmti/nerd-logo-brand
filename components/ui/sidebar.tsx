"use client";
import { LOGOSVG } from "@/public/Icons";
import React from "react";
import Link from "next/link";
import "./style.css";
import { Routes, RoutesModel } from "@/Routes/Routes";
import { getPathName } from "@/utils/getPathName";

interface Props {}
export default function Sidebar() {
  const isActive = (path: string) => path === getPathName();
  const RoutesMapHandler = () => (
    <ul className="flex-1">
      {Routes.map((item: RoutesModel) => {
        return (
          <Link
            href={item.href}
            key={item.name}
            className={`flex items-center text-baseText py-[6px] px-[24px] gap-[12px] h-[50px] ${isActive(item.label) ? "activeRouteItem" : "unActiveItem"}  `}
            replace
          >
            {item.Icon}
            {item.name}
          </Link>
        );
      })}
    </ul>
  );

  return (
    <div className="bg-mainBack h-screen w-[284px] border-r border-borderColor flex flex-col">
      <div className="w-full border-b  border-borderColor h-[80px] py-[6px] px-[16px]  flex items-center gap-[10px] ">
        <LOGOSVG className="cursor-pointer" />
        <h1 className="text-logText logoColor">LOGO Brand</h1>
      </div>
      <RoutesMapHandler />
      <div className="w-full h-[115px] py-[24px] border-t  border-borderColor">
        <div className="py-[36px] px-[24px] flex items-center">
          <img
            src="https://s3-alpha-sig.figma.com/img/fab6/ca52/30bb9e19747fc584f77a28f5a202b82d?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cf5tWJxMifqR0rVEYi49mjiH6L1Kex0phRCqmUfTtULk8tYC06M5NYDg6UCjjg-ttNSQpi30UhTyoaPNEwdwcPnQ8dNIjD~VTQPOZQnrrJ1~98FWftND17vGtwU4RHt00tYjAzHeY0g5q~eia234I-EbRneLVQY95YJ9mIPOgVoAhaTY~-NWURAE~eAvhzr4iNXAX7RUEd8gY06mL4Nj-v6mye9aoFAVZpNagyM7bbnXDdVs2~26ME2woAl4FxsgfEUfAVIKUudVr9zKpZr-N~Pfm4UxEaduGRp0UeCok7vCGcMShL3knUSEYvAyUujYDVBo7-dP1WC~SXb3tSC1Jw__"
            alt="profile-pic"
            className="rounded-full h-[50px] w-[50px]"
          />
        </div>
      </div>
    </div>
  );
}
