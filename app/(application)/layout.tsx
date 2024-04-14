import React from "react";
interface mainApplicationProps {
  children: React.ReactNode;
}
export default function MainApplicationLayout({
  children,
}: mainApplicationProps) {
  return (
    <html>
      <body>
        mainApplicationProps
        {
          children
        }
      </body>
    </html>
  );
}
