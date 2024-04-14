import React from "react";
interface mainApplicationProps {
  children: React.ReactNode;
}
export default function MainApplicationLayout({
  children,
}: mainApplicationProps) {
  return (
    <div>
      mainApplicationProps
      {children}
    </div>
  );
}
