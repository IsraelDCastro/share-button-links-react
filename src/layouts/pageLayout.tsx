import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="wrapper">
      <main>
        {children}
      </main>
    </div>
  );
}
