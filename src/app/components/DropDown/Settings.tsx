import { StyleClass } from "primereact/styleclass";
import React, { useRef } from "react";
import Community_Icon from "../../icon/Community_Icons/Community_Icon";
import { Ripple } from "primereact/ripple";
import Announcement_Icon from "../../icon/Community_Icons/Announcement_Icon";
import Polls_Survey from "../../icon/Community_Icons/Polls_Survey";
import Survey_Icon from "../../icon/Community_Icons/Survey_Icon";
import Setting_Icon from "@/app/icon/Cross_Functional_Icons/Setting_Icon";

export default function Settings() {
  const btnRef1 = useRef<any>(null);
    return (
    <ul className="list-none pl-3 pr-3 m-0 ">
      <li>
        <StyleClass
          nodeRef={btnRef1}
          selector="@next"
          enterFromClassName="hidden"
          enterActiveClassName="slidedown"
          leaveToClassName="hidden"
          leaveActiveClassName="slideup"
        >
          <div
            ref={btnRef1}
            className="p-ripple border-round-lg pt-2 pb-2 pl-2 pr-2 lists flex align-items-center  justify-content-between text-600 cursor-pointer"
          >
            <div className="flex align-items-center gap-1">
              <span>
                <Setting_Icon />
              </span>
              <span className="font-bold text-xs">SETTINGS</span>
            </div>
            <i className="pi pi-chevron-down"></i>
            <Ripple />
          </div>
        </StyleClass>
        <ul className="list-none pl-2 p-0 m-0 overflow-hidden hidden">
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <Announcement_Icon />
                </span>
                <span className="font-bold text-xs ">Announcements</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className=" pi pi-heart-fill"></i>
                </span>
                <span className="font-bold text-xs ">Celebration</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-sitemap"></i>
                </span>
                <span className="font-bold text-xs ">Directory</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-calendar"></i>
                </span>
                <span className="font-bold text-xs ">Events</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-sitemap"></i>
                </span>
                <span className="font-bold text-xs ">Kudos</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <i className="pi pi-sitemap"></i>
                </span>
                <span className="font-bold text-xs ">Organization Chart</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <Polls_Survey />
                </span>
                <span className="font-bold text-xs ">Polls</span>
              </div>
              <Ripple />
            </a>
          </li>
          <li>
            <a className="p-ripple lists flex align-items-center cursor-pointer border-round-lg  pt-2 pb-2 pl-2 pr-2 border-round text-700  transition-duration-150 transition-colors w-full">
              <div className="flex align-items-center gap-1">
                <span>
                  <Survey_Icon />
                </span>
                <span className="font-bold text-xs ">Survey</span>
              </div>
              <Ripple />
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
}
