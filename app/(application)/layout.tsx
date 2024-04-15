"use client";
// imports--------------------------------------->
import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";
import React, { useState } from "react";
// types----------------------------------------->
interface mainApplicationProps {
  children: React.ReactNode;
}

//components------------------------------------->
export default function MainApplicationLayout({
  children,
}: mainApplicationProps) {
  //states--------------------------------------->
  const [open, setOpen] = useState<boolean>(true);
  //handler function----------------------------->
  const openSidebarHandler = () => {
    setOpen((preState) => !preState);
  };

  //main UI components--------------------------->
  return (
    <main className="flex">
      <Sidebar open={open} />
      <div className="w-full">
        <Navbar open={open} openHandler={openSidebarHandler} />
        {children}
      </div>
    </main>
  );
}
