"use client";
import React, { useState, useRef, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { StyleClass } from "primereact/styleclass";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import Cross_Icon from "@/app/icon/Cross_Icon";
import SearchIcon from "@/app/icon/SearchIcon";
import Community_Dropdown from "../DropDown/Community_Dropdown";
import Cross_Functional_Dropdown from "../DropDown/Cross_Functional_Dropdown";
import Mission_Control from "../DropDown/Mission_Control";
import My_Hr from "../DropDown/My_Hr";
import Organization from "../DropDown/Organization";
import Community_Icon from "@/app/icon/Community_Icons/Community_Icon";
import Settings from "../DropDown/Settings";
import { Skeleton } from "primereact/skeleton";

export default function SIDE_BAR({
  visibility,
  onHide,
  onClickCross,
  Visible,
}: {
  Visible: any;
  visibility: boolean;
  onHide: () => void;
  onClickCross: () => void;
}) {
  const [visible, setVisible] = useState<boolean>(false);
  const btnRef1 = useRef<any>(null);
  const btnRef2 = useRef<any>(null);
  const btnRef3 = useRef<any>(null);
  const btnRef4 = useRef<any>(null);
  const [sidebarLoading, setSidebarLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSidebarLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="card flex  justify-content-center">
      <Sidebar
        style={{ width: "290px" }}
        className="scrollable"
        visible={visibility}
        modal={false}
        onHide={onHide}
        content={({}) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none"
              style={{ width: "290px" }}
            >
              <div className="flex flex-column h-full">
                {sidebarLoading ? (
                  // ✅ Sidebar Skeleton Loader
                  <div className="p-3">
                    <Skeleton
                      width="80%"
                      height="40px"
                      className="mb-3"
                      borderRadius="8px"
                    />
                    <Skeleton width="60%" height="20px" className="mb-2" />
                    <Skeleton width="90%" height="20px" className="mb-2" />
                    <Skeleton width="70%" height="20px" className="mb-4" />
                    <Skeleton
                      width="100%"
                      height="35px"
                      className="mb-2"
                      borderRadius="6px"
                    />
                    <Skeleton
                      width="100%"
                      height="35px"
                      className="mb-2"
                      borderRadius="6px"
                    />
                    <Skeleton
                      width="100%"
                      height="35px"
                      className="mb-2"
                      borderRadius="6px"
                    />
                  </div>
                ) : (
                  // ✅ Actual Sidebar Content
                  <>
                    <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                      <span className="inline-flex align-items-center gap-2">
                        <div className="h-[64px]">
                          <Image
                            src="/logo.svg"
                            alt="Logo"
                            priority
                            height={64}
                            width={200}
                          />
                        </div>
                      </span>
                      <button
                        onClick={onClickCross}
                        className="p-ripple cross-btn w-2rem h-2rem border-none cursor-pointer"
                      >
                        <span>
                          <Cross_Icon />
                        </span>
                        <Ripple />
                      </button>
                    </div>
                    {/* rest of your sidebar */}
                    <div className="flex align-items-center justify-content-center">
                      <span
                        style={{
                          padding: "3px",
                          backgroundColor: "#33c5f3",
                          borderRadius: "7px",
                        }}
                        className="font-semibold text-white text-sm"
                      >
                        Tenant:training
                      </span>
                    </div>
                    <div className="overflow-y-auto  w-full scrollable">
                      <div className="flex w-full   pl-3 pr-3 mt-3 mb-5 flex-column justify-content-center">
                        <div
                          tabIndex={0}
                          className="flex p-2 h-full hover:border-1 hover:border-blue-500  justify-content-center align-items-center border-1 border-round-lg w-full cursor-pointer   "
                          style={{ borderColor: "#e5e7eb", cursor: "pointer" }} // Corrected padding
                        >
                          <label
                            htmlFor="search"
                            className="flex align-items-center justify-content-start w-full"
                          >
                            <SearchIcon />
                            <input
                              id="search"
                              name="search"
                              placeholder="Search by module name"
                              className="w-10  pl-0 border-none cursor-pointer outline-none text-sm text-color placeholder:text-sm placeholder:text-color-secondary"
                            />
                          </label>
                        </div>
                      </div>
                      <ul className="list-none pl-3 pr-3 m-0 overflow-hidden">
                        <Link href="/" className="my-link p-ripple">
                          <li className=" lists pt-2 p-ripple cursor-pointer border-round-lg pb-2 pl-2 pr-2 ">
                            <i className="pi pi-home mr-1"></i>
                            <span className="font-bold text-xs">DASHBOARD</span>
                            <Ripple />
                          </li>
                        </Link>
                      </ul>
                      <Community_Dropdown />
                      <Cross_Functional_Dropdown />
                      <Mission_Control />
                      <My_Hr />
                      <ul className="list-none pl-3 pr-3 m-0 overflow-hidden">
                        <li className=" lists pt-2 p-ripple cursor-pointer border-round-lg pb-2 pl-2 pr-2 ">
                          <a href="#" className="my-link p-ripple">
                            <i className=" pi pi-users"></i>
                            <span className="font-bold pl-1 text-xs">
                              MY TEAM
                            </span>
                          </a>
                        </li>
                      </ul>
                      <Organization />
                      <ul className="list-none pl-3 pr-3 m-0 overflow-hidden">
                        <li className=" lists pt-2 p-ripple cursor-pointer border-round-lg pb-2 pl-2 pr-2 ">
                          <a
                            id="seeder-wizard"
                            href="#"
                            className="my-link no-underline  p-ripple flex align-items-center"
                          >
                            <span>
                              <Community_Icon />
                            </span>
                            <span className="font-bold pl-1 text-xs">
                              Seeder Wizard
                            </span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                      <Settings />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
    </div>
  );
}
