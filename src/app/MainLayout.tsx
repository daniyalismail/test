"use client";
import React, { useRef, useState } from "react";
import Header from "./Header";
import SIDE_BAR from "./components/Left_Sidebar/SIDE_BAR";
import { useIntersectionObserver } from "primereact/hooks";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visibility, setVisibility] = useState(false);
  const sideref = useRef<HTMLDivElement>(null);
  const Visible = useIntersectionObserver<HTMLDivElement | null>(sideref);
  
  return (
    <div className="flex w-full" style={{ height: "100vh" }}>
      {/* Sidebar */}
      {visibility && ( 
        <div ref={sideref}  style={{ width: "290px" }} className="h-full">
          <SIDE_BAR
           Visible={Visible}
            visibility={visibility}
            onHide={() => setVisibility(false)}
            onClickCross={() => setVisibility(false)}
          />
        </div>
      )}

      {/* Header (takes remaining space) */}
      <div
        style={{ height: "100vh" }}
        className="flex-1 flex flex-column w-full"
      >
        <Header
          visibility={visibility}
          onToggleSidebar={() => setVisibility(!visibility)}
        />
        {/* Page */}
        <main style={{ height: "89vh" }} className="w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
