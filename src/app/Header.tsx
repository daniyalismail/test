"use client";
import React from "react";
import { Button } from "primereact/button";
import Bolt_Icon from "./icon/Header/Bolt_Icon";
import Menu_Bar from "./components/MenuBar/Menu_Bar";

export default function Header({
  onToggleSidebar,
  visibility
}: {
  onToggleSidebar: () => void;
  visibility: boolean;
}) {
  return (
    <div
      className="flex w-full hdrbox
       justify-content-between align-items-center pt-3  pb-3 pt-3"
      style={{ height: "11vh" }}
    >
      <div>
        <Button
          icon={`pi ${ visibility ?  "pi-angle-double-left" : "pi-angle-double-right" }`}
          className="hdrbtn"
          onClick={onToggleSidebar}
        />
      </div>
      <div className="flex align-items-center gap-1 h-full">
        <Button className="bolticnbtn" icon='pi pi-bolt'/>
        <Menu_Bar />
      </div>
    </div>
  );
}
