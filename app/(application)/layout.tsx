import Sidebar from "@/components/ui/sidebar";
import React from "react";
interface mainApplicationProps {
  children: React.ReactNode;
}
export default function MainApplicationLayout({
  children,
}: mainApplicationProps) {
  return (
    <main className="flex items-center">
      <Sidebar />
      {children}
    </main>
  );
}
